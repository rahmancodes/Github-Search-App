import React from "react"; 
import "./Home.css";
const Home = () => {
    return ( 
        <div class="container">
            <div class="card">
                <div class="avatar">
                    <img src="data:image/png;base64,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"alt=""></img>
                </div>
                <div class="info">
                    <h2>Rahman Oke</h2> 
                    <p>rahmancodes</p> 
                    <div class="follow-info">
                        <div class="single">
                            <span>7</span> 
                            <span>Repositories</span>
                        </div>
                        <div class="single">
                            <span>29</span> 
                            <span>Followers</span> 
                        </div>
                        <div class="single">
                            <span>38</span> 
                            <span>Following</span> 
                        </div>
                    </div>
                </div>
            </div> 
            <div class="repos">
                <div class="card">
                    <h2>OS_100days</h2>
                </div>
                <div class="card">
                    <h2>first-contributions</h2>
                </div>
                <div class="card">
                    <h2>altschool-opensource-names</h2>
                </div>
                <div class="card">
                    <h2>rahmancodes</h2>
                </div>
                <div class="card">
                    <h2>circle193-HackathonProject-Phonie</h2>
                </div> 
                <div class="card">
                    <h2>OkeRahman-assignment-02</h2>
                </div>
            </div>
        </div>
    )
}; 

export default Home