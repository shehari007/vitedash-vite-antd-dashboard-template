import { Card, Table, Tag, Progress, Typography, Space, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const priorityColors = {
  High: 'red',
  Medium: 'gold',
  Low: 'green',
};

const projects = [
  { key: '1', name: 'Website Redesign', owner: 'Emma Wilson', priority: 'High', progress: 78, budget: '$12,400' },
  { key: '2', name: 'Mobile App Launch', owner: 'Liam Carter', priority: 'High', progress: 45, budget: '$28,900' },
  { key: '3', name: 'Internal Tooling', owner: 'Olivia Chen', priority: 'Medium', progress: 62, budget: '$6,200' },
  { key: '4', name: 'Marketing Campaign', owner: 'Noah Patel', priority: 'Low', progress: 90, budget: '$4,800' },
  { key: '5', name: 'API Migration', owner: 'Ava Martinez', priority: 'Medium', progress: 33, budget: '$15,000' },
  { key: '6', name: 'Customer Portal', owner: 'William Turner', priority: 'High', progress: 21, budget: '$19,500' },
  { key: '7', name: 'Design System', owner: 'Emma Wilson', priority: 'Low', progress: 100, budget: '$9,300' },
];

const columns = [
  {
    title: 'Project',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    key: 'owner',
    responsive: ['sm'],
  },
  {
    title: 'Priority',
    dataIndex: 'priority',
    key: 'priority',
    filters: Object.keys(priorityColors).map((priority) => ({ text: priority, value: priority })),
    onFilter: (value, record) => record.priority === value,
    render: (priority) => <Tag color={priorityColors[priority]}>{priority}</Tag>,
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
    sorter: (a, b) => a.progress - b.progress,
    render: (progress) => <Progress percent={progress} size="small" />,
  },
  {
    title: 'Budget',
    dataIndex: 'budget',
    key: 'budget',
    responsive: ['md'],
    sorter: (a, b) => Number(a.budget.replace(/[$,]/g, '')) - Number(b.budget.replace(/[$,]/g, '')),
  },
];

const Tables = () => {
  return (
    <div>
      <Space style={{ width: '100%', justifyContent: 'space-between', marginBottom: 24 }} wrap>
        <div>
          <Title level={4} style={{ marginBottom: 4 }}>
            Projects
          </Title>
          <Text type="secondary">Sortable, filterable, and expandable data table example.</Text>
        </div>
        <Button icon={<DownloadOutlined />}>Export CSV</Button>
      </Space>

      <Card>
        <Table
          columns={columns}
          dataSource={projects}
          pagination={{ pageSize: 6 }}
          scroll={{ x: 600 }}
          expandable={{
            expandedRowRender: (record) => (
              <Text type="secondary">
                {record.name} is owned by {record.owner} with a budget of {record.budget}.
              </Text>
            ),
          }}
        />
      </Card>
    </div>
  );
};

export default Tables;
