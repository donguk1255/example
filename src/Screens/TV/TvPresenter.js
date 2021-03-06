import React from 'react';
import PropTypes from 'prop-types';
import Section from "../../Compnents/Section";
import Poster from "../../Compnents/Poster";
import Loading from "../../Compnents/Loading";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0px 10px;
`

const TvPresenter = ({ontheair, popular, topRated, loading}) => {
    return (
        <>
            <Helmet>
                <title>TV Show | Coring</title>
            </Helmet>
            {loading ? (
                <Loading />
            ) : (
                <Container>
                    {ontheair && ontheair.length > 0 && (
                        <Section title={"On The Air"}>
                            {ontheair.map(item => (
                                <Poster
                                    key={item.id}
                                    id={item.id}
                                    title={item.name}
                                    rating={item.vote_average}
                                    year={item.first_air_date}
                                    poster={item.poster_path}
                                    isMovie={false}
                                />
                            ))}
                        </Section>
                    )}
                    {popular && popular.length > 0 && (
                        <Section title={"TV Popular"}>
                            {popular.map(item => (
                                <Poster
                                    key={item.id}
                                    id={item.id}
                                    title={item.name}
                                    rating={item.vote_average}
                                    year={item.first_air_date}
                                    poster={item.poster_path}
                                    isMovie={false}
                                />
                            ))}
                        </Section>
                    )}
                    {topRated && topRated.length > 0 && (
                        <Section title={"TV TopRate"}>
                            {topRated.map(item => (
                                <Poster
                                    key={item.id}
                                    id={item.id}
                                    title={item.name}
                                    rating={item.vote_average}
                                    year={item.first_air_date}
                                    poster={item.poster_path}
                                    isMovie={false}
                                />
                            ))}
                        </Section>
                    )}
                </Container>
            )}
        </>

    );
};

TvPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    ontheair: PropTypes.array,
    popular: PropTypes.array,
    topRated: PropTypes.array
};

export default TvPresenter;
