import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './Home.css';
import NewList from './NewList'
import List from './List'
import { getListTotal, getClosedItems, getOpenedItems } from '../store/reducers/list'
import { Creators as listActions } from '../store/actions/list';

const Home = (props) => (
    <div className="page-container home-image">
        <NewList NewList={props.newList} />
        {props.list.items.length > 0 &&
            <List
                list={props.list.list}
                total={props.total}
                openedItems={props.openedItems}
                closedItems={props.closedItems}
                date={props.date}
            />
        }
    </div>
);

const mapStateToProps = state => ({
    list: state.list,
    total: getListTotal(state),
    openedItems: getOpenedItems(state),
    closedItems: getClosedItems(state),
    date: state.list.date
})

const mapDispatchToProps = dispatch => bindActionCreators(listActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);