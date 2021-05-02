import React from 'react';
import { profiles } from '../../data';

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
                  <p>
                    {profile.bio}
                  </p>
                </div>
              );
            })
          }
        </div>
      </section>
    );
}

export default Profiles;