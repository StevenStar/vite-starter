import {
    Alert,
    Avatar,
    Breadcrumb,
    Button,
    Card,
    Col,
    Carousel,
    DatePicker,
    Divider,
    Dropdown,
    Form,
    Input,
    Layout,
    Menu,
    Popconfirm,
    Row,
    Select,
    Space,
    Spin,
    Table as AntdTable,
} from 'ant-design-vue';
import type { App } from 'vue'

export function setupAntd(app: App<Element>) {
    app.use(Alert)
        .use(Avatar)
        .use(Breadcrumb)
        .use(Button)
        .use(Card)
        .use(Col)
        .use(Carousel)
        .use(DatePicker)
        .use(Divider)
        .use(Dropdown)
        .use(Form)
        .use(Input)
        .use(Layout)
        .use(Menu)
        .use(Popconfirm)
        .use(Row)
        .use(Select)
        .use(Space)
        .use(Spin)
        .use(AntdTable)
}