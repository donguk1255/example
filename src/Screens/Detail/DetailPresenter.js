import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Loading from "../../Compnents/Loading";
import Helmet from "react-helmet"
import Poster from "../../Compnents/Poster";
import Section from "../../Compnents/Section";
import {Link} from "react-router-dom";
// import ModalVideo from "react-modal-video/src";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props => props.bgImage)});
  background-position: center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.3;
  z-index: 0;
`

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`

const Cover = styled.div`
  width: 40%;
  background-image: url(${(props => props.bgImage)});
  background-position: center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
  margin-right: 30px;
`

const Data = styled.div`
  width: 60%;
  margin-left: 10px;
  
`

const Title = styled.h3`
  font-size: 32px;
  padding-bottom: 20px;
`

const OverView = styled.span`
  font-size: 18px;
  padding-bottom: 20px;
`
const Popularity = styled.h4`
  margin-bottom: 20px;
  font-size: 21px;
`

const Gen = styled.div`
  margin-top: 20px;
  font-size: 14px;
  margin-bottom: 20px;
`

const Language = styled.span`
  padding-top: 20px;
  font-size: 14px;
  margin-bottom: 20px;
`

const Similar = styled.h4`
  padding-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
`



const DetailPresenter = ({result, loading, similar, videos, error}) => {

    // const [isOpen, setOpen] = useState(false)
    return (
        loading ? (
            <>
                <Helmet>
                    <title>Loading | Coding</title>
                </Helmet>
                <Loading />

            </>

        ) : (
            <>
                <Helmet>
                    <title>{result.title ? result.title : result.name}</title>
                </Helmet>
                <Container>
                    <Backdrop
                        bgImage={
                            result.backdrop_path ? `https://image.tmdb.org/t/p/w500${result.backdrop_path}` : require("../../assets/noimage.png")
                        }
                    />
                    <Content>
                        <Cover
                            bgImage={
                                result.poster_path ? `https://image.tmdb.org/t/p/w500${result.poster_path}` : require("../../assets/noimage.png")
                            }
                        />
                        <Data>
                            <Title>
                                {result.title ? result.title : result.name}
                            </Title>
                            <Popularity>
                                Popularity: {result.popularity}
                            </Popularity>
                            <OverView>
                                {result.overview.substring(0, 250)}...
                            </OverView>
                            <div>
                                {videos && videos.length > 0 && (
                                    <Section title={"관련영상"}>
                                        {videos.map(item => (
                                            // <ModalVideo
                                            //     channel='youtube'
                                            //     autoplay
                                            // />
                                            <a
                                                href={`https://www.youtube.com/watch?v=${item.key}`}
                                            >

                                            </a>

                                        ))}
                                    </Section>
                                )}
                            </div>
                            <Gen>
                                Genres : {result.genres && result.genres.map((genre, index) => (
                                index === result.genres.length - 1
                                    ? genre.name
                                    : `${genre.name} / `
                            ))}
                            </Gen>
                            <Language>
                                Languages : {result.spoken_languages && result.spoken_languages.map((lanuguage, index) =>(
                                index === result.spoken_languages.length - 1
                                    ? lanuguage.name
                                    : `${lanuguage.name} / `
                            ))}
                            </Language>
                            {/*<Similar>*/}
                            {/*    SimilarContents : {result.title || result.name.map((similar, index) => (*/}
                            {/*    index === result.title.length - 1*/}
                            {/*        ? similar.title*/}
                            {/*        : `${similar.name} / `*/}
                            {/*))}*/}
                            {/*</Similar>*/}
                            {similar && similar.length > 0 && (
                                <Section title={"Similar Contets"}>
                                    {similar.slice(0, 3).map(item => (

                                        <Poster
                                            title={item.title || item.name}
                                            key={item.id}
                                            id={item.id}
                                            poster={item.poster_path}
                                        />
                                        ))}
                                    </Section>
                            )}



                        </Data>
                    </Content>

                </Container>
            </>

        )

    );
};

DetailPresenter.propTypes = {
    result: PropTypes.object,
    similar: PropTypes.array,
    video: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;
