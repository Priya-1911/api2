import { useState, useEffect } from "react"

const Fetch = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                return setPhotos(data);
            });

    }, []);
    return (
        <div>
            {photos.map((photo) => (
                <img key={photo.id} src={photo.url} alt={photo.title} width={100}></img>
            ))}
        </div>
    )
}

export default Fetch