// import { Component } from "react";
// import { Searchbar } from "./Searchbar/Searchbar";
// import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { apiFetch } from "./Api";
// import { Button } from "./Button/Button";
// import { Loader } from "./Loader/Loader";
// import { Message } from "./Message/Message";

// export class App extends Component  {
//   state = {
//     searchPromt: '',
//     page: 1,
//     imagesArr: [],
//     totalImages: 0,
//     status: 'idle'
//   }


//   render() {
//     const { status, imagesArr, totalImages } = this.state;
  
//     const components = {
//       idle: <Message text='Fulfill your imagination' />,
//       pending: <Loader />,
//       resolved: imagesArr.length === 0 ? (
//         <Message text='Nobody here but us chickens!' />
//       ) : (
//         <>
//           <ImageGallery data={imagesArr} />
//           {totalImages > imagesArr.length ? (
//             <Button loadMore={this.loadMoreImg} />
//           ) : (
//             <Message text='Hope it`s fulfilled' />
//           )}
//       )</>),
      
//       default: <Message text='Something went wrong' />,
//     };
  
//     const componentToRender = components[status] || components.default;
  
//     return (
//       <>
//         <Searchbar onSubmit={this.submitHandler} />
//         <div className="container">
//           {componentToRender}
//         </div>
//       </>
//     );
//   }
import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { apiFetch } from "./Api";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Message } from "./Message/Message";

export class App extends Component {
  state = {
    searchPromt: '',
    page: 1,
    imagesArr: [],
    totalImages: 0,
    status: 'idle'
  }

  submitHandler = (e) => {
    // Обработка отправки формы поиска
    // Выполнение запроса к API с использованием `searchTerm`
    // Обновление состояния компонента с полученными результатами
    e.preventDefault()
    this.setState({ searchPromt: e.target.elements.search.value.trim(), page: 1 }, async () => {
      if (!this.state.searchPromt) {
      return
      }
      try {
        this.setState({status: 'pending'})
        const images = await apiFetch(this.state.searchPromt, this.state.page)
        this.setState({ imagesArr: images.data.hits, totalImages: images.data.totalHits, status: 'resolved' })
      } catch (e) {
        this.setState({status: 'rejected'})
      }
    })
    
  };

  loadMoreImages = () => {
    // Загрузка дополнительных изображений
    // Обновление состояния компонента с новыми изображениями
    this.setState({ page: this.state.page + 1 }, async () => {
      try {
     const images = await apiFetch(this.state.searchPromt, this.state.page)
     this.setState(prevState => ({
       imagesArr: [...prevState.imagesArr, ...images.data.hits]
       }));
     } catch (e) {
       alert('Something went wrong')
     }
   })
  
  };

  render() {
    const { status, imagesArr, totalImages } = this.state;

    const components = {
      idle: <Message text="Let's find what you need" />,
      pending: <Loader />,
      resolved: imagesArr.length === 0 ? (
        <Message text="Nothing is here!" />
      ) : (
        <>
          <ImageGallery data={imagesArr} />
          {totalImages > imagesArr.length ? (
            <Button loadMore={this.loadMoreImages} />
          ) : (
            <Message text="Hope you found what you need" />
          )}
        </>
      ),
      default: <Message text="Something went wrong" />,
    };

    const componentToRender = components[status] || components.default;

    return (
      <React.Fragment>
        <Searchbar onSubmit={this.submitHandler} />
        <div className="container">{componentToRender}</div>
      </React.Fragment>
    );
  }
}
