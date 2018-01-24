## This package is under development... Come back soon!

## React Last Status Component

React component that shows the last status of user.
Add your own last seen status to your project.

| elapsed time | status output example | props | default | 
| :---: | :---: | :---: | :---: |
| max last `nowLimiar` ms | online | now | `[online]` |
| max same day | today at 00:00 | sameDay | `[today] [at] HH:mm` |
| max 1 day ago | yesterday at 00:00 | lastDay | `[yesterday] [at] HH:mm` |
| max 1 week ago | sunday at 00:00 | lastWeek | `dddd [at] HH:mm` |
| before | 01/01/2018 at 00:00 | sameElse | `L [at] HH:mm` |


## Auto Refresh
The react-last-status makes auto refreshes automatically.

## Demo
Lorem Ipsum...

## Usage

Install package:
```sh
npm install --save react-last-status
```

Import component:
```js
import LastStatus from 'react-last-status';
```

Add component with respective props:
```js
<LastStatus timestamp={timestamp}/>
```
## Props
### timestamp
Lorem Ipsum...
### locale
Lorem Ipsum...
### limiarOnline
Lorem Ipsum...
### online
Lorem Ipsum...
### today
Lorem Ipsum...
### yesterday
Lorem Ipsum...
### lastWeek
Lorem Ipsum...
### before
Lorem Ipsum...

## Languages
Set the language of component with `locale` props. 

```js
<LastStatus locale={'pt-BR'}/>
```

| locale | language |
| :---: | :---: |
| es-US *default* | english |
| pt-BR | portuguese (Brazil) |