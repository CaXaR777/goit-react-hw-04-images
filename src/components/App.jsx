// import { Component } from "react";
// import { Searchbar } from "./Searchbar/Searchbar";
// import { ImageGallery } from "./ImageGallery/ImageGallery";
// import { apiFetch } from "./Api";
// import { Button } from "./Button/Button";
// import { Loader } from "./Loader/Loader";
// import { Message } from "./Message/Message";

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
import React, { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { apiFetch } from './Api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Message } from './Message/Message';

export const App = () => {
  // state = {
  //   searchPromt: '',
  //   page: 1,
  //   imagesArr: [],
  //   totalImages: 0,
  //   status: 'idle'
  // }
  const [searchPromt, setSearchPromt] = useState('');
  const [page, setPage] = useState(1);
  const [imagesArr, setImagesArr] = useState([]);
  const [totalImages, setTotalImages] = useState(0);
  const [status, setStatus] = useState('idle');

  const submitHandler = async e => {
    // e.preventDefault()
    // this.setState({ searchPromt: e.target.elements.search.value.trim(), page: 1 }, async () => {
    //   if (!this.state.searchPromt) {
    //   return
    //   }
    //   try {
    //     this.setState({status: 'pending'})
    //     const images = await apiFetch(this.state.searchPromt, this.state.page)
    //     this.setState({ imagesArr: images.data.hits, totalImages: images.data.totalHits, status: 'resolved' })
    //   } catch (e) {
    //     this.setState({status: 'rejected'})
    //   }
    // })

    e.preventDefault();
    const searchTerm = e.target.elements.search.value.trim();
    setSearchPromt(searchTerm);
    setPage(1);

    if (!searchTerm) return;

    try {
      setStatus('pending');
      const images = await apiFetch(searchTerm, 1);
      setImagesArr(images.data.hits);
      setTotalImages(images.data.totalHits);
      setStatus('resolved');
    } catch (error) {
      setStatus('rejected');
    }
  };

  const loadMoreImages = async () => {
    //   this.setState({ page: this.state.page + 1 }, async () => {
    //     try {
    //    const images = await apiFetch(this.state.searchPromt, this.state.page)
    //    this.setState(prevState => ({
    //      imagesArr: [...prevState.imagesArr, ...images.data.hits]
    //      }));
    //    } catch (e) {
    //      alert('Something went wrong')
    //    }
    //  })
    try {
      const nextPage = page + 1;
      const images = await apiFetch(searchPromt, nextPage);
      setImagesArr(prevImagesArr => [...prevImagesArr, ...images.data.hits]);
      setPage(nextPage);
    } catch (error) {
      alert('Something went wrong');
    }
  };

  // const { status, imagesArr, totalImages } = this.state;

  const components = {
    idle: <Message text="Let's find what you need" />,
    pending: <Loader />,
    resolved:
      imagesArr.length === 0 ? (
        <Message text="Nothing is here!" />
      ) : (
        <>
          <ImageGallery data={imagesArr} />
          {totalImages > imagesArr.length ? (
            <Button loadMore={loadMoreImages} />
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
      <Searchbar onSubmit={submitHandler} />
      <div className="container">{componentToRender}</div>
    </React.Fragment>
  );
};
