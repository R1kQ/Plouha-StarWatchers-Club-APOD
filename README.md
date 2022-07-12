# Plouha-StarWatchers-Club-APOD

<br>
Integrated with NASA's API, this application will display a space picture/video of the day.


Link to project: http://plouha-starwatch-apod.netlify.app


![chrome_JW6yAx1Ouc](https://user-images.githubusercontent.com/87287179/178388314-32c49eb7-1ccc-4778-807c-3213abf00881.gif)


---
<br>

## How It's Made ##

Tech used: HTML, CSS, JavaScript, NASA Astronomy Picture of the Day API


This program is constructed with semantic HTML, CSS, JavaScript and utilizes NASA's APOD API. With the use of the API, we're able to see any picture of video from NASA's databse for the given date. You can access any date going back to the 1990's! The program will prompt the user to choose a date, the user will click the search button (carrying an EventListener) once a date has been chosen, and then the particular image/video will be rendered on the page. Along with the image/video, we're also grabbing a description of it, provided by NASA, and any copyright information. You'll find some truly inspiring information with this app, I promise! 


---
<br>

## Optimizations ##
1. Make site more responsive
2. Make site more mobile friendly
3. Add light/dark theme

---
<br>

## Lessons Learned ##

In working with this project, I learned how to sift through JSON information given back from the NASA API. I had to create some restraints on what information could be shared and how to edit the page when switching between rendering photos and videos. I also was able to work with <iframe>s in order to render the correct YouTube video.
