import React from "react";
import { Filter } from '../../components/community/FilterPanel/Filter'
import { AppCommunity } from "../../components/community/ListCommunity/ListCommunity";
import { useEffect, useState } from "react";
import axios from "axios";

export const AppListCommunity = () => {
  const token = localStorage.getItem("token");
  const [animals, setAnimals] = useState([
    { id: "Anjing", checked: false, label: "Anjing" },
    { id: "Kucing", checked: false, label: "Kucing" },
    { id: "Kelinci", checked: false, label: "Kelinci" },
    { id: "Burung", checked: false, label: "Burung" },
    { id: "Hamsters", checked: false, label: "Hamsters" },
  ]);

  const handleChangeChecked = (id) => {
    const animalsList = animals;
    const changeCheckedAnimals = animalsList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAnimals(changeCheckedAnimals);
  };

  const [list, setList] = useState([]);

  const applyFilters = async () => {

    try {
      const activeLocations = animals.filter((e) => e.checked);
      let url = "";
      if (activeLocations.length > 0) {
        url = `http://intern-7.eba-27tmcxsh.ap-southeast-1.elasticbeanstalk.com/user/community/search?jenisHewan=${activeLocations[0].id}`;
      } else {
        url ="http://intern-7.eba-27tmcxsh.ap-southeast-1.elasticbeanstalk.com/user/community";
      }
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,}} ).then((res) => {
        //buat nampung data
        setList(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [animals]);

  return (
    <div className="container-fluid">
      <div className="home">
        <div className="home-content">
          <div className="home-panel-content">
            <h4>Jenis Hewan</h4>
            {/* Side Panels*/}
            <Filter animals={animals} changeChecked={handleChangeChecked} />
          </div>
          <div className="home-list-content">
            {/* List & Empty View*/}
            {list !== null ? (
              <AppCommunity list={list} />
            ) : (
              <h4 style={{ textAlign: "center" }}>
                Mohon maaf di lokasi yang Anda pilih belum tersedia
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};