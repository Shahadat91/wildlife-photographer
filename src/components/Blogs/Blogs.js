import React from "react";
import './Blogs.css';

const Blogs = () => {
  return (
    <div className="blogs">
      <div>
        <h3>Q-1: Difference between `authorization` and `authentication.</h3>
        <p>
          System এ access করার jonno Authentication process এ, user identity
          checked করা হয়। Authorization process এ, user এর resources checke
          করা হয় access দেওয়ার জন্য। Authentication process এ, users কে
          verified করা হয়। Authorization process এ, users কে validated করা
          হয়।
        </p>
      </div>
      <div>
        <h3>
          Q-2:Why are you using `firebase`? What do you have to implement
          authentication?
        </h3>
        <p>
          Firebase হচ্ছে user base high-quality apps তৈরি করতে সাহায্য করে। এর প্রত্যেকটা feature independently কাজ করে, এবং তারা একসাথে
          আরও ভালভাবে কাজ করে।
        </p>
        <p>
          other options to implement authentication: 1. Cookie-Based
          authentication 2. Token-Based authentication 3. Third party
          access(OAuth, API-token) 4. OpenId 5. SAML
        </p>
      </div>
      <div> 
        <h3>
          Q-3: What other services does `firebase` provide other than
          authentication?
        </h3>
        <p>Firebase Authentication  backend services provides করে, সহজে SDKs ব্যবহার করে কাজ করা যায়, এবং ready-made UI libraries আছে যা app এ users কে authenticate করে।  passwords, phone numbers, Google, Facebook, Twitter, সহ অনেকগুলো authentication support করে।</p>
      </div>
    </div>
  );
};

export default Blogs;
