# repository_typeahead
Intuit code craft challenge

| **Steps** | **Commands** | **Details** |
|----------|-------|-------|
|  Install packages  |   `npm i`    | node version: 11.4.0 |
|  Start project | `npm run start` | Tested in Chrome |
|  Test | `npm run test` | Uses minimal testing |
|  Lint | `npm run lint` | Uses airbnb rules |

# user flow

**Search Github Repos Page -**

<p align="center">
  <img width="300" src="https://s3-us-west-1.amazonaws.com/vellocet/images/flow-1.png"/>
</p>

**Site Alert Messaging -** This handles the edge case where a user presses the enter key with an invalid search value.

<p align="center">
  <img width="300" src="https://s3-us-west-1.amazonaws.com/vellocet/images/flow-6.png"/>
</p>

**Search All Repos By Query Button -** A fixed button at the top of all typeahead result that navigates you to a page of github repositories via the current search term value.

<p align="center">
  <img width="300" src="https://s3-us-west-1.amazonaws.com/vellocet/images/flow-2.png"/>
</p>

**Typeahead Dropdown Item -** Click on a top github repository to view the summary. Scroll infinitely to reveal results in chunks of 10.

<p align="center">
  <img width="300" src="https://s3-us-west-1.amazonaws.com/vellocet/images/flow-3.png"/>
</p>

**Search Results Page -** If a user decides to push the enter button on the search page he will redirect here with a more complete list of search results.

<p align="center">
  <img width="300" src="https://s3-us-west-1.amazonaws.com/vellocet/images/flow-4.png"/>
</p>

**Repository Summary Page -** A user can either click on a repository dropdown item or an item in the search results page to navigate to it's summary.

<p align="center">
  <img width="300" src="https://s3-us-west-1.amazonaws.com/vellocet/images/flow-5.png"/>
</p>
