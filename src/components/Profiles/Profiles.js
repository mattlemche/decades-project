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
                  <p>
                    {profile.firstName}
                  </p>
                  <p>
                    {profile.lastName}
                  </p>
                  {/* <p>
                    {profile.bio}
                  </p> */}
                  <div className="socials">
                      {
                        profile.socials.twitter ?
                        <a href={profile.socials.twitter} 
                        className="socials__link">
                        <Twitter className="socials__icon"/>
                        </a> :
                        ''
                      }
                      {
                        profile.socials.instagram ?
                        <a href={profile.socials.instagram} 
                        className="socials__link">
                        <Instagram className="socials__icon"/>
                        </a> :
                        ''
                      }
                      {
                        profile.socials.website ?
                        <a href={profile.socials.website} 
                        className="socials__link">
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