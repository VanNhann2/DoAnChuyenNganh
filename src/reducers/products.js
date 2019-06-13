var initialState = [
    {
        id : 1,
        name : 'Canon PowerShot G7 X Mark II',
        image :'https://www.usa.canon.com/internet/wcm/connect/us/83426ebb-4169-4cec-9333-a944509d0ad1/powershot-g1-x-mark-ii-digital-camera-3q-d.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-83426ebb-4169-4cec-9333-a944509d0ad1-kZo26EZ',
        description : 'sản phẩm tốt nhất việt nam',
        price : 600,
        model: '1066C001AA',
        inventory : 7
    },
    {
        id : 2,
        name : 'Canon PowerShot G9 X Mark II Silver',
        image :'https://www.usa.canon.com/internet/wcm/connect/us/b4b77168-136c-4a74-a109-4b8f17c39a8d/powershot-g9-x-mark-ii-silver-3q-d.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-b4b77168-136c-4a74-a109-4b8f17c39a8d-lAD9SPF',
        description : 'sản phẩm tốt nhất trung quốc',
        price : 400,
        model: '1718C001AA',
        inventory : 47
    },
    {
        id : 3,
        name : 'Canon PowerShot SX730 HS Black',
        image :'https://www.usa.canon.com/internet/wcm/connect/us/0c025f6a-d374-46a3-98dd-3e64bdda709b/powershot-sx730-hs-black-3q-d.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-0c025f6a-d374-46a3-98dd-3e64bdda709b-lIw2-bb',
        description : 'sản phẩm tốt tốt nhất việt nam',
        price : 350,
        model: '1791C001AA',
        inventory : 74
    },
    {
        id : 4,
        name : 'Canon PowerShot SX720 HS',
        image :'https://i1.adis.ws/i/canon/EOS%20800D%20FRT%20with%20EF-S%2018-135mm%20ISSTM?w=340&qlt=100&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
        description : 'sản phẩm tốt tốt nhất việt nam',
        price : 329.99,
        model: '1070C001AA',
        inventory : 74
    },
    {
        id : 5,
        name : 'Sony α7 II E-mount Camera with Full Frame Sensor',
        image :'https://static1.squarespace.com/static/56cc470427d4bdfc954a8759/57e00a2fd482e9d2d577b9c6/57e00a3037c581c512ae64d7/1474300464820/5139115307.jpg',
        description : 'sản phẩm tốt tốt nhất việt nam',
        price : 899.992,
        model: 'ILCE-7M2',
        inventory : 74
    },
    {
        id : 6,
        name : 'α7R E-mount Camera with Full-Frame Sensor',
        image :'https://i1.adis.ws/i/canon/EOS%20800D%20FRT%20with%20EF-S%2018-135mm%20ISSTM?w=340&qlt=100&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)',
        price : 10000000000000000000,
        description : 'sản phẩm tốt tốt nhất việt nam',
        model: 'ILCE-7R',
        inventory : 74
    },
    {
        id : 7,
        name : 'Sony A7RIII Full-frame Mirrorless Digital Camera Body',
        image :'https://shop.texasmediasystems.com/assets/images/products/sony/alpha/sony_a7r3_d_web.jpg',
        description : 'sản phẩm tốt tốt nhất việt nam',
        price : 150,
        model: 'ILCE7RM3',
        inventory : 74
    },
    {
        id : 8,
        name : 'Sony A7R III Mirrorless Digital Camera',
        image :'https://s3.us-east-2.amazonaws.com/dev.shuttershare/gear/1517330489337-ptx6GhGKdxM3JmL1',
        description : 'sản phẩm tốt tốt nhất việt nam',
        price : 175,
        model: 'No C5d',
        inventory : 743,
    }
]

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;