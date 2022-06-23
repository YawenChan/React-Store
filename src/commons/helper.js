export const
formatPrice = cents => {
    return (cents / 100).toLocaleString('zh',{
        style:'currency',
        currency:'CNY'
    })
}

export const jsonDataRun = (c) =>{
    const array =[]
    for(let i = 0; i < c.length;i ++){
        array.push({...c[i]})
    }
    return array
}