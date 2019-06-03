var initialState = [
    {
        id : 1,
        name : 'Sony S4',
        image :'https://icdn3.digitaltrends.com/image/canon-eos-6d-mark-ii-review-12-1500x1000.jpg',
        description : 'sản phẩm tốt nhất việt nam',
        price : 400,
        inventory : 7
    },
    {
        id : 2,
        name : 'Sony S7',
        image :'https://4.img-dpreview.com/files/p/E~TS589x442~articles/4291544487/793A5872.jpeg',
        description : 'sản phẩm tốt nhất trung quốc',
        price : 44400,
        inventory : 47
    },
    {
        id : 3,
        name : 'Sony S5',
        image :'https://cdn.vox-cdn.com/thumbor/9IHMjFpQI_tBk9Ii5D42YclwX9U=/0x0:1020x672/1200x800/filters:focal(429x255:591x417)/cdn.vox-cdn.com/uploads/chorus_image/image/61156271/Xv09-17_16-48-1320.1419973912.0.jpg',
        description : 'sản phẩm tốt tốt nhất việt nam',
        price : 4040,
        inventory : 74
    }
]

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;