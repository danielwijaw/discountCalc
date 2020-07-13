# Discount Calculator
<p>This apps using nodeJs. Please install nodeJs first before run this apps.<p>
<p>link download nodejs : https://nodejs.org/en/download/<p>
<p><b>To Do List Do Magic</b><p>
<ol>
    <li>Clone this repo</li>
    <pre>git clone https://github.com/danielwijaw/discountCalc</pre>
    <li>Open directory apps</li>
    <pre>cd discountCalc</pre>
    <li>Install Node Modules</li>
    <pre>npm install</pre>
    <li>Edit .env and setup database</li>
    <pre>nano .env</pre>
    <li>After setup configuration in .env then run this command to create database</li>
    <pre>node node_modules/db-migrate/bin/db-migrate db:create discountCalc --env first</pre>
    <li>After created database then run this command to migrating table</li>
    <pre>node node_modules/db-migrate/bin/db-migrate up</pre>
</ol>