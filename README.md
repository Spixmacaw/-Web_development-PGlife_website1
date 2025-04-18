<h1>Project Report: PG Life Website</h1>

  <h2>Project Title:</h2>
  <p><strong>PG Life Website </strong></p>

  <h2>Abstract:</h2>
  <p>
    The PG Life Website (PGlife_website1) is a full-fledged web application developed to help students and working professionals locate and book PG accommodations in different cities. It is designed with the goal of creating a reliable and accessible platform for finding shared housing options tailored to gender preferences, budgets, and lifestyle needs. The platform provides detailed information on various PG accommodations and includes features such as advanced search, booking, admin control, and user feedback mechanisms.
  </p>

  <h2>Project Description:</h2>
  <p>
    The <strong>PG Life Website</strong> is a web-based platform developed to assist students in finding and booking comfortable and affordable PG (Paying Guest) accommodations near educational institutions. The website offers a user-friendly interface to search, filter, and view PG listings based on city, gender preference, amenities, and budget. It bridges the gap between students and PG owners by providing an all-in-one solution to browse, review, and reserve accommodation options.
  </p>

  <h2>Purpose:</h2>
  <p>
    To simplify the process of finding PG accommodations for students and working professionals by providing an online portal with reliable listings, reviews, and direct booking features. The platform aims to reduce the time, effort, and uncertainty involved in house-hunting while offering verified information and transparency.
  </p>

  <h2>1. Features Implemented</h2>
  <ul>
    <li><strong>User Authentication</strong>
      <ul>
        <li>Secure registration and login system for users</li>
        <li>Role-based access control (students and admin)</li>
      </ul>
    </li>
    <li><strong>Search & Filter Options</strong>
      <ul>
        <li>Filter PGs by city, gender preference, budget, and amenities</li>
        <li>Sort results by name, price, or ratings</li>
      </ul>
    </li>
    <li><strong>PG Listings</strong>
      <ul>
        <li>Detailed pages for each PG showing images, descriptions, room types, prices, and facilities</li>
        <li>Status indication for availability</li>
      </ul>
    </li>
    <li><strong>Responsive Design</strong>
      <ul>
        <li>Mobile-first responsive interface for seamless use across devices</li>
      </ul>
    </li>
    <li><strong>Admin Panel</strong>
      <ul>
        <li>Admin interface to manage PG entries, user accounts, and bookings</li>
        <li>Edit or remove outdated listings</li>
      </ul>
    </li>
    <li><strong>Other Functionalities</strong>
      <ul>
        <li>Rating and review system for users to leave feedback</li>
        <li>Option to bookmark and save favorite PGs</li>
        <li>Secure password encryption and data validation</li>
      </ul>
    </li>
  </ul>

  <h2>2. Technologies Used</h2>
  <table>
    <tr><th>Component</th><th>Technology</th></tr>
    <tr><td><strong>Frontend</strong></td><td>HTML, CSS, Bootstrap, JavaScript, API, React</td></tr>
    <tr><td><strong>Backend</strong></td><td>Python, PHP, DBMS, MongoDB</td></tr>
    <tr><td><strong>Database</strong></td><td>MySQL / SQLite</td></tr>
    <tr><td><strong>Version Control</strong></td><td>GitHub</td></tr>
    <tr><td><strong>Hosting</strong></td><td>Localhost / Web Server</td></tr>
  </table>


  <h2>3. System Architecture</h2>
  <ul>
    <li><strong>Client Side:</strong> Developed using HTML, CSS, JavaScript, and React, this layer interacts with users. It handles the user interface, rendering listings, filters, and booking forms dynamically.</li>
    <li><strong>Server Side:</strong> The backend processes user requests, manages logic and routes, and communicates with the database. Built using Python or PHP, it handles authentication, form processing, data retrieval, and session management.</li>
    <li><strong>Database:</strong> Centralized storage system using MySQL, SQLite, or MongoDB. It stores user credentials, PG listings, reviews, and booking records securely.</li>
  </ul>

  <h2>4. Database Design (ER Diagram Overview)</h2>

  <h3>Users</h3>
  <ul>
    <li>user_id (PK), name, email, password, gender, role</li>
  </ul>

  <h3>PG_Listings</h3>
  <ul>
    <li>pg_id (PK), name, city, gender_allowed, price, description, image_urls</li>
  </ul>

  <h3>Bookings</h3>
  <ul>
    <li>booking_id (PK), user_id (FK), pg_id (FK), booking_date</li>
  </ul>

  <h3>Reviews</h3>
  <ul>
    <li>review_id (PK), user_id (FK), pg_id (FK), rating, comment</li>
  </ul>

  <h2>ER Diagram in Tabular Format</h2>

  <h3>Entity: Users</h3>
  <table>
    <tr><th>Field Name</th><th>Data Type</th><th>Description</th></tr>
    <tr><td>user_id (PK)</td><td>INT</td><td>Unique ID for each user</td></tr>
    <tr><td>name</td><td>VARCHAR</td><td>Name of the user</td></tr>
    <tr><td>email</td><td>VARCHAR</td><td>Email ID (unique)</td></tr>
    <tr><td>password</td><td>VARCHAR</td><td>Hashed password</td></tr>
    <tr><td>gender</td><td>VARCHAR</td><td>Gender of the user</td></tr>
    <tr><td>role</td><td>VARCHAR</td><td>Role: 'student' or 'admin'</td></tr>
  </table>

  <h3>Entity: PG_Listings</h3>
  <table>
    <tr><th>Field Name</th><th>Data Type</th><th>Description</th></tr>
    <tr><td>pg_id (PK)</td><td>INT</td><td>Unique ID for each PG</td></tr>
    <tr><td>name</td><td>VARCHAR</td><td>Name of the PG</td></tr>
    <tr><td>city</td><td>VARCHAR</td><td>City where the PG is located</td></tr>
    <tr><td>gender_allowed</td><td>VARCHAR</td><td>Allowed gender: Male/Female/Both</td></tr>
    <tr><td>price</td><td>DECIMAL</td><td>Monthly rent</td></tr>
    <tr><td>description</td><td>TEXT</td><td>PG description</td></tr>
    <tr><td>image_urls</td><td>TEXT</td><td>Paths or links to images</td></tr>
  </table>

  <h3>Entity: Bookings</h3>
  <table>
    <tr><th>Field Name</th><th>Data Type</th><th>Description</th></tr>
    <tr><td>booking_id (PK)</td><td>INT</td><td>Unique ID for each booking</td></tr>
    <tr><td>user_id (FK)</td><td>INT</td><td>References user_id from Users</td></tr>
    <tr><td>pg_id (FK)</td><td>INT</td><td>References pg_id from PG_Listings</td></tr>
    <tr><td>booking_date</td><td>DATE</td><td>Date of booking</td></tr>
  </table>

  <h3>Entity: Reviews</h3>
  <table>
    <tr><th>Field Name</th><th>Data Type</th><th>Description</th></tr>
    <tr><td>review_id (PK)</td><td>INT</td><td>Unique ID for each review</td></tr>
    <tr><td>user_id (FK)</td><td>INT</td><td>References user_id from Users</td></tr>
    <tr><td>pg_id (FK)</td><td>INT</td><td>References pg_id from PG_Listings</td></tr>
    <tr><td>rating</td><td>INT</td><td>Rating out of 5</td></tr>
    <tr><td>comment</td><td>TEXT</td><td>Review comment</td></tr>
  </table>

</body>
</html>


verfy:

click this--> https://github.com/Spixmacaw/-Web_development-PGlife_website1.git

>where: 
This website referral url.
   
click this :http://debanjansarkar.epizy.com/PGLIFE/index.php
   
.Entire web-app is fully responsive and is operational from any device.

.skills users:- HTML, CSS, Bootstrap ,Javascript,AJAX, PHP, MySQL, react.

Installation:

To set up the PG-Life Web Application on your local system, follow these steps:

    1.Clone the repository:

        git clone https://github.com/mohitrajput2002/PG-Life.git 

    2.Database Connectivity:
Create a database with phpMyAdmin Tool using the same name as the provided SQL file name. Import the given SQL file into the created database.

    3.Update database connectivity: 
In the file includes/database_connect.php, modify the following line:php
       
    $conn = mysqli_connect("localhost", "username_of_phpmyadmin", "password_of_phpmyadmin", "Database_name(PGLife)");

Replace "username_of_phpmyadmin", "password_of_phpmyadmin", and "Database_name(PGLife)" with your phpMyAdmin credentials and the database name you created.

Technologies Used:

    The following technologies:
        1.HTML
        2.CSS
        3.bootstrap
        4.JavaScript
        5.PHP
        6.MySQL-Database(phpMyAdmin_server)
    Thank you!
![ Spixmacaw Stats](https://github-readme-stats.vercel.app/api?username=Spixmacaw&theme=vue-dark&show_icons=true&hide_border=true&count_private=true)

![Spixmacaw Stats](https://github-readme-stats.vercel.app/api?username=Spixmacaw&theme=vue-dark&show_icons=true&hide_border=true&count_private=true)
![Spixmacaw Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=Spixmacaw&theme=vue-dark&show_icons=true&hide_border=true&layout=compact)

<hr>

![Alt](https://repobeats.axiom.co/api/embed/f713688be87aa5899cb61012215ab0e43e64b7af.svg "Repobeats analytics image")


/



