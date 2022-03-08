import React from 'react'
import { dataList } from '../../constants/Data';
import { Filter } from '../../components/consultation/FilterPanel/Filter';
import { AppClinic } from '../../components/consultation/ListClinic/ListClinic';
import { useEffect, useState } from 'react';


export const AppListClinic = () => {
    const [locations, setLocations] = useState([
      { id: 1, checked: false, label: 'Jakarta'},
      { id: 2, checked: false, label: 'Malang'},
      { id: 3, checked: false, label: 'Surabaya'},
      { id: 4, checked: false, label: 'Medan'},
      { id: 5, checked: false, label: 'Bali'}
    ]);

    const handleChangeChecked = (id) => {
        const locationsList = locations;
        const changeCheckedLocations = locationsList.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        );
        setLocations(changeCheckedLocations);
      };

      const [list, setList] = useState(dataList);

      const applyFilters = () => {
        let updatedList = dataList;
    
        // Location Filter
        const locationsChecked = locations
          .filter((item) => item.checked)
          .map((item) => item.label.toLowerCase());
    
        if (locationsChecked.length) {
          updatedList = updatedList.filter((item) =>
            locationsChecked.includes(item.location)
          );
        }
    
        setList(updatedList);
      };
    
        useEffect(() => {
          applyFilters();
        }, [locations]);

        return (
          <div className='container-fluid'>
            <div className='home'>
              <div className='home-content'>
                  <div className='home-panel-content'>
                    <h4>Pilih Lokasi</h4>
                      {/* Side Panels*/}
                      <Filter
                       locations={locations}
                       changeChecked={handleChangeChecked}/>
                  </div>
                  <div className='home-list-content'>
                      {/* List & Empty View*/}
                      <AppClinic
                      list={list}/>
                  </div>
              </div>
            </div>
          </div>
          ) 

}
