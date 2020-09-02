import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './List.css';
import Form from './Form';
import ListItem from './ListItem';
import NewItem from './NewItem';
import { Creators as ListActions } from '../store/actions/list';

class CreateList extends Component {

    addProduct = (product, list) => {
        this.props.addProduct(product, list);
    }

    render() {
        return (
            <div className="page-container">
                <Form
                    addProduct={this.addProduct}
                    updateProduct={this.props.updateProduct}
                    url={this.props.match.params.action}
                />
                <div className="list-item-container">
                    {this.props.list.items.map(item =>
                        <ListItem
                            list={this.props.list.list}
                            key={item.id}
                            item={item}
                            toggleProduct={this.props.toggleProduct}
                            deleteProduct={this.props.deleteProduct}
                        />
                    )}

                    {this.props.match.params.action === 'edicao' &&
                        <NewItem list={this.props.list.list} />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    list: state.list
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);