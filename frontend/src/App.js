import React, { Fragment, useEffect, useState } from 'react';
import './App.css';

const App = () => {
    useEffect(() => {
        const getAPI = async () => {
            const response = await fetch('http://localhost:8080/');
            const data = await response.json();
            
            try {
                console.log(data);
                setLoading(false);
                setAnime(data);
            } catch (error) {
                console.log(error);
            }
        };
        getAPI();
    }, []);

    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <Fragment>
            <h1>Welcome</h1>
            <div>
                <a className="welcomeMessage">Hello and welcome to the page where you can add excercises for gym. Remember to have
                                            the link for the picture in "Image input"</a>
                <form method="POST" className="box" action="http://localhost:8080/add-anime">
                    <h2>Add excercise</h2>
                    <div>
                        <input type="text" name="name" placeholder="Name" required />
                    </div>
                    <div>
                        <input type="text" name="image" placeholder="Image" required />
                    </div>
                    <div>
                        <input type="text" name="description" placeholder="Description" required />
                    </div>

                    <div>
                        <button type="submit">Add List</button>
                    </div>
                </form>
            </div>
            <div className="result">
                {loading ? (
                    <div>Loading</div>
                ) : (
                    <div>
                        {anime.map((data) => (
                            <div key={data._id}>
                                <ul>
                                    <div>
                                        <h3>
                                            <a href="/{data.id}" className="name">{data.name}</a>
                                        </h3>
                                    </div>
                                    <div>
                                        <img src={data.image} alt={data.name} className="Image"/>
                                    </div>
                                    <div>
                                        <p className="description">{data.description}</p>
                                    </div>
                                    <br/>
                                    <hr color="black" /*className="hr"*//>
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default App;
