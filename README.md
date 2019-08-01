<h1 align="center">osu! Mappool Generator (Web Based)</h1>

<p align="center">A Mappool Generator for osu tournament livestreams<br>
   <a href="https://osu.ppy.sh/community/forums/topics/937671">osu! Forum Post</a>
</p>

## How to use

1. Go to the [mappool-generator](https://mrayhanhakim.github.io/mappool-generator) page to start using the program.
2. You'll be greeted with the first form right away, fill in all of the boxes for each pool for how many maps that you want, The max input for each pool is currently 10 for now, Then click next.  
   <p align="center">
      <img src="https://i.imgur.com/Ph2zqG1.png" title="First Form Example" />
   </p>
3. Fill in the next form boxes with the beatmap id that you want to use for each pool. For the API key, you need to request it from [The API request page](https://old.ppy.sh/p/api) or by clicking the title on the form. If you want to change for how many maps that you want to use for each pool, you can click the previous button. If not, you can click next.  
   <p align="center">
      <img src="https://i.imgur.com/64inYyf.png" title="Second Form Example" />
   </p>
4. Then, You'll be greeted with the preview of the result! If you want to change your previous inputs, you can scroll down and click the previous button.  
   <p align="center">
      <img src="https://i.imgur.com/QOHv4Ky.png" title="Result!" />
   </p>
5. You can save the result to your local device by right clicking the page and click save as (Google Chrome) or save page as (Mozilla Firefox) or press ctrl/command + s, and save it in a folder so that you won't have to input the same mappool if you want to use that result multiple times. (Optional, but **Recommended**)  
   <p align="center">
      <img src="https://i.imgur.com/ao9w1Mz.png" title="Chrome Context Menu">
   </P>
6. To use the result, left click on the blank left side of the map for banned map of blue team and right click for red team, left click the right side with the mod icon for selected map of blue team and right click for red team, and left click the middle area to unselect.  
   <p align="center">
      <img src="https://i.imgur.com/nbNkkCS.gif" title="How to Use the Result" />
   </p>

## How to use it with Broadcasting Software

In this how to, I'm using OBS (Open Broadcaster Software) as my broadcasting software. If you use another software, please refer to their manual while you go through this tutorial.

1. Open your Broadcasting Software and add window capture from the sources. You can rename the source to anything you want, if you're done, you can click the ok button.  
   <p align="center">
      <img src="https://i.imgur.com/wSJAmJD.png" />
      <img src="https://i.imgur.com/MbACfqy.png" />
   </p>  
2. Change the window to the browser window (in this case, it's chrome) where you open the mappool generator website, then click ok.
   <p align="center">
      <img src="https://i.imgur.com/E4NvqVH.png" />
   </p>
   
   * If your broadcasting software aren't able to display chrome correctly (black screen), follow these steps: 
   
   1. On the top right corner of chrome, there's a three dot menu, click it and select settings.
      <p align="center">
         <img src="https://i.imgur.com/KqpjcBr.png" title="Chrome Menu" />
      </p>
   2. Search for "_Hardware Acceleration_", and disable it, then relaunch chrome.  
      <p align="center">
         <img src="https://i.imgur.com/MbOpAPN.png" title="Chrome Settings" />
      </p>  
3. Right click the source that you just added, and choose filters.
   <p align="center">
      <img src="https://i.imgur.com/YMn5AoH.png" />
   </p>
4. On the filters window, add the crop/pad filter to the effect filters, you can rename the filter if you want to. In this tutorial, I only want to crop the top bar of the window, so I only fill in the top input to 90.
   <p align="center">
      <img src="https://i.imgur.com/oagCaRM.png" />
      <img src="https://i.imgur.com/IqHFUM2.png" />
   </p>
5. Then add another filter called Chroma key to the Effect Filters, you can rename the filter if you want to. If you notice the TB icon, it also disappears because of the chrome key, you need to change similarity from 400 to 350.
   <p align="center">
      <img src="https://i.imgur.com/blYnLes.png" />
      <img src="https://i.imgur.com/IZPT5ck.png" />
   </p>
6. Then you can close the filters window and you're done! It will look more or less something like this.  
   <p align="center">
      <img src="https://i.imgur.com/BtCDBfH.png" title="Final Result!" />
   </p>   

If there's something wrong with the program, post the issue in this repository and feel free to leave any suggestion in the forum post!

---

<p align="center">
   This project is licensed under the terms of the MIT license.<br>
   <a href="https://opensource.org/licenses/MIT">
      <img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT" />
   </a>
</p>
