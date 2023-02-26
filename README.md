# CSV-Uploader

## Setup
Clone repository.
### Back-end setup
1. Open `back-end` directory project with [InteliJ IDEA](https://www.jetbrains.com/idea/)
2. Open `CsvUploaderApplication.java` file and run the script
3. Now api should be started at [localhost:8080](http://localhost:8080/)

To check connection navigate to [localhost:8080/h2-console](http://localhost:8080/h2-console) and click `Test Connection` button. 

<img width="134" alt="Screenshot 2023-02-26 at 23 22 19" src="https://user-images.githubusercontent.com/43463977/221438057-1a505d79-1ecd-4291-81a5-5d0a58f56725.png">

Expected result - the test is successful:

<img width="331" alt="Screenshot 2023-02-26 at 23 23 43" src="https://user-images.githubusercontent.com/43463977/221438109-33d06246-ff88-4b2e-b6e7-178cd6991a9c.png">




### Front-end setup
1. In `front-end` directory run 
```
npm install
npm start
```
2. Navigate to [localhost:3000](http://localhost:3000/)
3. CSV file should have columns named like this `Name,Email,Phone`. The example file can be found in project folder(`src/assets/ExampleCSV.csv`) or [here](https://github.com/estaniulyte/CSV-Uploader/blob/main/front-end/src/assets/ExampleCSV.csv).
4. Upload CSV file by clicking `Upload CSV file` button
5. You should see this result:

![Screenshot 2023-02-26 at 23 20 37](https://user-images.githubusercontent.com/43463977/221437949-f79bbe6b-78a5-416d-9bb6-01c280cef2db.png)


