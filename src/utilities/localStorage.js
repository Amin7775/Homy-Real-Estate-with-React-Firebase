const getEstateData = () =>{
    const getFavoriteEstatesData = localStorage.getItem('favoriteEstates')

    if(getFavoriteEstatesData){
        return JSON.parse(getFavoriteEstatesData)
    }
    return []
}

const setEstatesData = (estateData) =>{
    const allData = getEstateData()
    const exists = allData?.find(singleEstate => singleEstate.id == estateData.id)

    if(!exists){
        allData.push(estateData)
        localStorage.setItem('favoriteEstates', JSON.stringify(allData))
    }
}

export {getEstateData,setEstatesData}