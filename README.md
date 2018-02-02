# React Last Status Component

React component that shows the last status of user.
Add your own last seen status to your project.


Last seen max 30.000 miliseconds ago:
![Online](https://i.imgur.com/HP9M0og.png)

Last seen max 1 week ago:
![LastWeek](https://i.imgur.com/OedBeJ3.png)

Mouse over component pop title with full date:
![Title](https://i.imgur.com/CLhHQJf.png)

## Auto Refresh
The react-last-status makes auto refreshes automatically each 15.000ms.

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

| prop | description | 
| :---: | :---: |
| `now` | *output personalization* |
| `sameDay` | *output personalization* |
| `lastDay` | *output personalization* |
| `lastWeek` | *output personalization* |
| `sameElse` | *output personalization* |
| `timestamp` | timestamp of last status |
| `locale` | language |
| `nowLimiar` | time elapsed to consider online |


## Output Personalization

| elapsed time | status output example | props | default | 
| :---: | :---: | :---: | :---: |
| max last `nowLimiar` ms | online | now | `[online]` |
| max same day | today at 00:00 | sameDay | `[today] [at] HH:mm` |
| max 1 day ago | yesterday at 00:00 | lastDay | `[yesterday] [at] HH:mm` |
| max 1 week ago | sunday at 00:00 | lastWeek | `dddd [at] HH:mm` |
| before | 01/01/2018 at 00:00 | sameElse | `L [at] HH:mm` |

```js
<LastStatus
	timestamp={timestamp}
	now={'[I am alive]'}
	sameDay={'[last seen today at] HH:mm'}
	lastDay={'[last seen yesterday at] HH:mm'}
	lastWeek={'[last seen] dddd [at] HH:mm'}
	sameElse={'[last seen] L [at] HH:mm'}/>
```

#### Escaping characters

To escape characters in format strings, you can wrap the characters in square brackets.

```js
'[today at] HH:mm' //'today at 00:00'
```

## Languages
Set the language of component with `locale` prop. 

```js
<LastStatus locale={'pt-BR'}/>
```

| locale | language |
| :---: | :---: |
| en *(default)* | English (USA) |
| pt-BR | Portuguese (Brazil) |

