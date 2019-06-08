var initialState = [
    {
        id : 1,
        name : 'Sony S4',
        image :'https://i1.adis.ws/i/canon/EOS_80D%20EF-S%2018-55%20IS%20STM%20FRT_1?fmt=jpg&fmt.options=interlaced&bg=rgb(245,246,246)',
        description : 'sản phẩm tốt nhất việt nam',
        price : 400,
        model: 'No C4dc',
        inventory : 7
    },
    {
        id : 2,
        name : 'Sony S7',
        image :'https://i1.adis.ws/i/canon/m5-transparency.png',
        description : 'sản phẩm tốt nhất trung quốc',
        price : 444,
        model: 'No C7d',
        inventory : 47
    },
    {
        id : 3,
        name : 'Sony S5',
        image :'https://i1.adis.ws/i/canon/m6-transparency.png',
        description : 'sản phẩm tốt tốt nhất việt nam',
        price : 404,
        model: 'No C5d',
        inventory : 74
    },
    {
        id : 4,
        name : 'EOS 800D',
        image :'https://i1.adis.ws/i/canon/EOS%20800D%20FRT%20with%20EF-S%2018-135mm%20ISSTM?w=340&qlt=100&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
        description : 'sản phẩm tốt tốt nhất việt nam',
        price : 300,
        model: 'No C5d',
        inventory : 74
    },
    {
        id : 5,
        name : 'Canon Zoemini S',
        image :'https://i1.adis.ws/i/canon/canon-ef-m-32mm-f-1-4-stm-lens-range_315121424920090?fmt=jpg&fmt.options=interlaced&bg=rgb(245,246,246)',
        description : 'sản phẩm tốt tốt nhất việt nam',
        price : 244,
        model: 'No C5d',
        inventory : 74
    },
    {
        id : 6,
        name : 'EOS 250D',
        image :'https://i1.adis.ws/i/canon/EOS%20800D%20FRT%20with%20EF-S%2018-135mm%20ISSTM?w=340&qlt=100&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
        price : 255,
        description : 'sản phẩm tốt tốt nhất việt nam',
        model: 'No C5d',
        inventory : 74
    },
    {
        id : 7,
        name : 'EOS M10',
        image :'https://i1.adis.ws/i/canon/EOS_M10%20BK%20EF-M22STM%20FRT?w=340&qlt=100&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
        description : 'sản phẩm tốt tốt nhất việt nam',
        price : 997,
        model: 'No C5d',
        inventory : 74
    },
    {
        id : 8,
        name : 'EOS 1300D',
        image :'https://i1.adis.ws/i/canon/EOS_1300D%20EF-S18-55%20IS%20II%20FRT?w=340&qlt=100&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
        description : 'sản phẩm tốt tốt nhất việt nam',
        price : 675,
        model: 'No C5d',
        inventory : 74
    }
]

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;