import React, { Component } from 'react'
import items from "./data";

const RoomContext = React.createContext();

//provider sebagai menyediakan datanya dari si context
//consumer biar data yang udh diprovide sm provide bisa dipake
class RoomProvider extends Component {
    state = {
        clinics: [],
        sortedClinic: [],
        listlinic: [],
        loading: true,
    }
//getData
    componentDidMount() {
        //this.getData
        let clinics = this.formatData(items);
        let locations = clinics.filter(clinic => clinic.location === true);
        this.setState({
            clinics,
            locations,
            sortedClinic: clinics,
            loading: false
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.id;
        
            let clinic = {...item};
            return clinic
        })
        return tempItems
    }

//gunanya ... biar dia ngambil data semua dari state, gaperlu manggil 1 per 1
  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
          {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext}
