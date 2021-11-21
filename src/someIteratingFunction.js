//this function is supposed to iterate through GlobalData.js
//when completed, paste into App.js
import GlobalData from './GlobalData'
//sample code pulled from homecoming-2021
//needs to be modified
const Articles = this.props.data.map((el, i) => {
    var newID = el.title;
    var id = newID.replace(/ /g, "-");
    console.log(id);
    list[i] = {
        name: el.title,
        description: el.author
    }
    return <ArticleBox key={i} data={el} id={id}/>
})


//new version
const Buttons = GlobalData[locations].map((el, i) => {
    var newID = el.name;
    var id = newID.replace(/ /g, "-");
    console.log(id);
    list[i] = {
        name: el.name,
        description: el.description
    }
    return <Button key={i} data={el} id={id}></Button>
})