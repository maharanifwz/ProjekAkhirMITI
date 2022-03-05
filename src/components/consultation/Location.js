import React from 'react'
import { useEffect, useState } from 'react'
import { FilterPanel } from './Filter/FilterPanel'
import { List } from './List/List'
import { dataList } from '../../constants/Data'

export const AppLocation = () => {
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
        <div className='home'>
        <h1>Select Location</h1>
        <div className='home-content'>
            <div className='home-panel-content'>
                {/* Side Panels*/}
                <FilterPanel
                 locations={locations}
                 changeChecked={handleChangeChecked}/>
            </div>
            <div className='home-list-content'>
                {/* List & Empty View*/}
                <List
                list={list}/>
            </div>
        </div>
      </div>
  )
}