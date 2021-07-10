function refactorResponse(data) {
    let covidData = {}
    data?.map((item) => {
        covidData[item.country] = {
            active: item.active,
            total: item.cases,
            deaths: item.deaths,
            countryInfo: item.countryInfo,
            recovered:item.recovered
        }
    })
    return covidData
}

export async function fetchCovidData() {
    try {
        const data = await (
            await fetch("https://corona.lmao.ninja/v2/countries?yesterdat&sort")
        ).json();
        const refactoredData = refactorResponse(data)
        return refactoredData
    } catch (error) {
        console.error(error)
    }

}


