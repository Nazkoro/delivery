const renderitems = (data) =>{
	data.forEach((elem) =>console.log(elem) );
}

fetch(`https://test-97990-default-rtdb.firebaseio.com/db/partners.json`)
	.then((res) => res.json())
	.then((data) => renderitems(data))
	.catch((err) => console.log(err))

