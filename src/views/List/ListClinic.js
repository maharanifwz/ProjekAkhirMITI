import React from "react";
import { dataList } from "../../constants/Data";
import { Filter } from "../../components/consultation/FilterPanel/Filter";
import { AppClinic } from "../../components/consultation/ListClinic/ListClinic";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const AppListClinic = () => {
  const [locations, setLocations] = useState([
    { id: "jakarta", checked: false, label: "Jakarta" },
    { id: "malang", checked: false, label: "Malang" },
    { id: "surabaya", checked: false, label: "Surabaya" },
    { id: "medan", checked: false, label: "Medan" },
    { id: "bali", checked: false, label: "Bali" },
  ]);

  const handleChangeChecked = (id) => {
    const locationsList = locations;
    const changeCheckedLocations = locationsList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setLocations(changeCheckedLocations);
  };

  const [list, setList] = useState(dataList);

  const applyFilters = async () => {
    // let updatedList = dataList;

    // // Location Filter
    // const locationsChecked = locations
    //   .filter((item) => item.checked)
    //   .map((item) => item.label.toLowerCase());

    // if (locationsChecked.length) {
    //   updatedList = updatedList.filter((item) =>
    //     locationsChecked.includes(item.location)
    //   );
    // }

    try {
      const activeLocations = locations.filter((e) => e.checked);
      const url = `https://f065-118-99-76-148.ngrok.io/user/clinic/search?kota=${activeLocations[0].id}`
      const url2 = ``
      if (activeLocations.length > 0) {
        const response = await axios
          .get(
            url
          )
          .then((res) => {
            //buat nampung data
            setList(res.data.data);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [locations]);

  return (
    <div className="container-fluid">
      <div className="home">
        <div className="home-content">
          <div className="home-panel-content">
            <h4>Pilih Lokasi</h4>
            {/* Side Panels*/}
            <Filter locations={locations} changeChecked={handleChangeChecked} />
          </div>
          <div className="home-list-content">
            {/* List & Empty View*/}
            {list.length > 0 ? <AppClinic list={list}/> : <h4 style={{textAlign:'center'}}>Mohon maaf di lokasi yang Anda pilih belum tersedia</h4>}
          </div>
        </div>
      </div>
    </div>
  );
};