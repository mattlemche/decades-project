import React from 'react';
import { profiles } from '../../data';
import { ReactComponent as Twitter } from '../../assets/twitter-brands.svg';
import { ReactComponent as Instagram } from '../../assets/instagram-brands.svg';
import { ReactComponent as Web } from '../../assets/globe-europe-regular.svg';

function Profiles() {
    return (
        <section className="section">
            <h3 className="heading-3">
            Who is Behind the Decades Project?
            </h3>
        <div className="columns">
          {
            profiles.map((profile, i) => {
              return (
                <div key={i} className="column">
                    <img src={profile.image} alt={profile.alt} className="profile__image"/>
                  <p className="profile__first-name">
                    {profile.firstName}
                  </p>
                  <p className="profile__last-name">
                    {profile.lastName}
                  </p>
                  {/* <p className="profile__bio">
                    {profile.bio}
                  </p> */}
                  <div className="socials">
                      {
                        profile.socials.twitter ?
                        <a href={profile.socials.twitter} 
                        className="socials__link" target="_blank" rel="noreferrer">
                        <Twitter className="socials__icon"/>
                        </a> :
                        ''
                      }
                      {
                        profile.socials.instagram ?
                        <a href={profile.socials.instagram} 
                        className="socials__link" target="_blank" rel="noreferrer">
                        <Instagram className="socials__icon"/>
                        </a> :
                        ''
                      }
                      {
                        profile.socials.website ?
                        <a href={profile.socials.website} 
                        className="socials__link" target="_blank" rel="noreferrer">
                        <Web className="socials__icon"/>
                        </a> :
                        ''
                      }
                                    
                  </div>
                </div>
              );
            })
          }
        </div>
      </section>
    );
}

export default Profiles;