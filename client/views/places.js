Template.places.helpers({
  places:[
    {place: 'Ironworks Supply Co.', img: 'ironworks.jpg', address: '51 Broad Street, Bristol BS1 2EP, England', rating: 4.5, site: 'http://www.ironworkssupply.co.uk/', number: '441179292220'},
    {place: 'Pipal Tree Restaurant.', img: 'pipaltree.jpg', address: '28 Cheslea Road, Bristol, BS5 6AF, England', rating: 5, site: 'http://pipaltreerestaurant.co.uk/', number: '441179558820'},
    {place: 'Caribbean Croft.', img: 'carrabiancroft.jpg', address: '30 Stokes Croft, Bristol BS1 3QD, England', rating: 5, site: 'http://caribbeancroft.co.uk/', number: '441173305298'},
    {place: 'Urban Tandoor.', img: 'urbantandoor.jpg', address: '13 Small Street, Bristol BS1 1DE, England', rating: 4.5, site: 'https://www.urban-tandoor.com/', number: '441179299222'},
    {place: 'Bulrush.', img: 'bulrush.jpg', address: '21 Cotham Road South, Bristol BS6 5TZ, England', rating: 5, site: 'http://www.bulrushrestaurant.co.uk/', number: '441173290990'},
    {place: 'Casamia.', img: 'casamia.jpg', address: 'The General, Lower Guinea Street, Bristol BS1 6SY, England', rating: 4.5, site: 'http://www.casamiarestaurant.co.uk/', number: '441179592884'},
    {place: 'Adelina Yard.', img: 'adelina.jpg', address: '3 Queens Quay, Welsh Back, Bristol, England', rating: 4.5, site: 'http://adelinayard.com/', number: '441179112112'},
    {place: 'Eat A Pitta.', img:'eatapitta.jpg', address: '1-3 Glass Arcade, St Nicholas Market, Bristol BS1 1LJ, England', rating: 4.5, site: 'https://www.eatapitta.co.uk/', number: '441179259553'},
    {place: 'Hao Wei.', img: 'haowei.jpg', address: 'The Square Long Down Avenue, Bristol BS16 1GU, England', rating: 5, site: 'http://haowei.co.uk/', number: '441179311818'},
    {place: 'The White Rabbit.', img: 'thewhiterabbit.jpg', address: '33 - 38 Gordon Road Clifton, Bristol, England', rating: 5, site: 'http://www.whiterabbitbristol.co.uk', number: '441179089096'},
    {place: 'Wilks Restaurant.', img: 'wilks.jpg', address: '1-3 Chandos Road, Bristol BS6 6PG, England', rating: 4.5, site: 'http://www.wilksrestaurant.co.uk/', number: '441179737999'}
  ]
});

Template.home.helpers({
  places: function() {
    return places.find({},{sort:{createdAt:1}});
  }
});
