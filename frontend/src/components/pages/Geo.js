onSelected = (viewport, item) => {
          this.setState({
            viewport,
            tempMarker: {
              name: item.place_name,
              longitude: item.center[0],
              latitude: item.center[1]
            }
          })
    }
    
    