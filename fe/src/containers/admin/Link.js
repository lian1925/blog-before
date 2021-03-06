import React, { Component } from 'react';
import { connect } from 'react-redux';
import connectData from '../../helpers/connectData';
import Alert from '../../components/Alert';
import { pushState } from 'redux-router';
import formatForm from '../../utils/formatForm';
import { editOver } from '../../utils/actionOver';
import * as detailActions from '../../redux/modules/admin/detail';
import State from './State';

function fetchData(getState, dispatch, location) {
  return dispatch(detailActions.load({x: 'link', id: location.query.id}));
}

@connectData(fetchData)
@connect(
  state => ({
    detail: state.adminDetail
  }),
  { ...detailActions, pushState }
)
export default class Link extends Component {
  state = {
    validateMsg: null,
    showAlert: false
  }
  render() {
    let
      detail = this.props.detail;

    if (detail.loadData && detail.loadData.data) {
      let {xData} = detail.loadData.data;
      return (
        <div className="main">
          <table className="table1">
            <tbody>
            <tr>
              <td className="td1">&nbsp;</td>
              <td><h2>{xData._id ? '编辑' : '新增'}</h2></td>
            </tr>
            <tr>
              <td className="td1">名称：</td>
              <td><input type="text" ref="name" className="form-control" defaultValue={xData.name} /></td>
            </tr>
            <tr>
              <td className="td1">链接：</td>
              <td><input type="text" ref="url" className="form-control wd4" defaultValue={xData.url} /></td>
            </tr>
            <tr>
              <td className="td1">&nbsp;</td>
              <td>
                <a href="javascript:void(0)" className="btn" onClick={this.handleSubmit.bind(this, xData._id)}>确定</a>&nbsp;&nbsp;
                <Alert data={detail.editData} loading={detail.editing} error={detail.editError} validateMsg={this.state.validateMsg} showAlert={this.state.showAlert} />
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      )
    } else {
      return <State data={detail.loadData} loading={detail.loading} error={detail.loadError} />
    }
  }
  handleSubmit(id) {
    let
      data = formatForm(this, [
        {
          name: 'name',
          rules: ['isRequired'],
          msgs: ['名称不能为空！']
        }, {
          name: 'url',
          rules: ['isRequired', 'isUrl'],
          msgs: ['链接不能为空！', '链接格式错误！']
        }
      ]),
      props = this.props;

    // 提交
    if (data) {
      if (id) {
        editOver(props.update({x: 'link', id}, data), this, ADMINPATH + 'linkList');
      } else {
        editOver(props.create({x: 'link'}, data), this, ADMINPATH + 'linkList');
      }
    }
  }
}