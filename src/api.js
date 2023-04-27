export async function dataapi(){
    const responce = await fetch('/api/vans')
    const data = await responce.json()
    return data.vans

}