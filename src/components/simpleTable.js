import React from "react";
import { Table, Button, Modal } from "antd";
import 'antd/dist/antd.css';

const SimpleTable = ({ dataSource, onEdit, onDelete }) => {
  
  const handleDeleteConfirm = (record) => {
    Modal.confirm({
      title: 'Confirm Deletion',
      content: `Are you sure you want to delete ${record.name}?`,
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        onDelete(record.id);
      },
    });
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={() => onEdit(record)}>Edit</Button>
          <Button type="danger" onClick={() => handleDeleteConfirm(record)}>Delete</Button>
        </span>
      ),
    },
  ];

  return (
    <div className="table-container">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default SimpleTable;

