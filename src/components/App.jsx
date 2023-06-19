import { Component } from "react";
// import { Searchbar } from "./Searchbar/Searchbar";
// import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { apiFetch } from "./Api/Api";
// import { Button } from "./Button/Button";
// import { Loader } from "./Loader/Loader";
// import { Message } from "./Message/Message";

export class App extends Component  {
  state = {
    searchPromt: '',
    page: 1,
    imagesArr: [],
    totalImages: 0,
    status: 'idle'
  }



  render() {
    const {status, imagesArr, totalImages} = this.state
   return (
     <>
       <Searchbar onSubmit={this.submitHandler} />
       <div className="container">
         {status === 'idle' ? <Message text='Fulfill your imagination'/>
           : status === 'pending' ? <Loader />
           : status === 'resolved' ? imagesArr.length === 0 ? <Message text='Nobody here but us chickens!'/> : <><ImageGallery data={imagesArr} />{totalImages > imagesArr.length ? <Button loadMore={this.loadMoreImg} /> : <Message text='Hope it`s fulfilled'/>}</>
           : <Message text='Something went wrong'/>
       </div>
     </>);
 } 
};