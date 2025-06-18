# Web Development Project 2 - AI Knowledge Challenge

Submitted by: **Ayush Bhandari**

This web app: **is a Quizlet-style flashcard application designed to test your knowledge of Artificial Intelligence. It displays questions on the front of a card and reveals the corresponding answer (text or image) when flipped. Users can navigate through the card set sequentially.**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**
  * *(Note: Current implementation navigates to the next sequential card, not a random one.)*

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [x] **Previous button:** Added functionality to navigate to the previous card in the set.
* [x] **Navigation Disabling:** "Previous" and "Next" buttons are disabled when at the start or end of the card set, respectively.
* [x] **Basic Responsiveness:** The main app container adjusts its width on smaller screens.
* [x] **CSS Flip Animation:** Implemented a smooth 3D flip effect using CSS transformations.

## Video Walkthrough

Here's a walkthrough of implemented required features:

[Video Walkthrough](https://imgur.com/a/DkOy1P9) Here is the link if not found : https://imgur.com/a/DkOy1P9


GIF created with Imgur. 
## Notes

While building the app, a key challenge was ensuring the CSS flip animation was smooth and correctly managed its `backface-visibility`. Additionally, handling the conditional rendering of either text or an image for the card's answer in the `Back` component required careful state management and data structuring.

## License

    Copyright [2025] [Ayush Bhandari]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
