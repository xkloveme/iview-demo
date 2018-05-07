<template>
    <div>
        <Button type="primary" icon="sixi-prompt">sixi-prompt</Button>
        <Button type="error" shape="circle" icon="alert">Search</Button>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="姓名" prop="name">
                <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
            </FormItem>
            <FormItem label="邮箱" prop="mail">
                <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
            </FormItem>
            <FormItem label="城市" prop="city">
                <Select v-model="formValidate.city" placeholder="请选择所在地">
                    <Option value="beijing">北京市</Option>
                    <Option value="shanghai">上海市</Option>
                    <Option value="shenzhen">深圳市</Option>
                </Select>
            </FormItem>
            <FormItem label="选择日期">
                <Row>
                    <Col span="11">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="选择日期" v-model="formValidate.date"></DatePicker>
                    </FormItem>
                    </Col>
                    <Col span="2" style="text-align: center">-</Col>
                    <Col span="11">
                    <FormItem prop="time">
                        <TimePicker type="time" placeholder="选择时间" v-model="formValidate.time"></TimePicker>
                    </FormItem>
                    </Col>
                </Row>
            </FormItem>
            <FormItem label="性别" prop="gender">
                <RadioGroup v-model="formValidate.gender">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="爱好" prop="interest">
                <CheckboxGroup v-model="formValidate.interest">
                    <Checkbox label="吃饭"></Checkbox>
                    <Checkbox label="睡觉"></Checkbox>
                    <Checkbox label="跑步"></Checkbox>
                    <Checkbox label="看电影"></Checkbox>
                </CheckboxGroup>
            </FormItem>
            <FormItem label="介绍" prop="desc">
                <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
    </div>

</template>
<script>
export default {
    data() {
        return {
            formValidate: {
                name: '',
                mail: '',
                city: '',
                gender: '',
                interest: [],
                date: '',
                time: '',
                desc: ''
            },
            ruleValidate: {
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                mail: [
                    { required: true, message: '邮箱;;;不能为空', trigger: 'blur' },
                    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                ],
                city: [
                    { required: true, message: '请选择城市', trigger: 'change' }
                ],
                gender: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                interest: [
                    { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                    { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                ],
                date: [
                    { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                ],
                time: [
                    { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请输入个人介绍', trigger: 'blur' },
                    { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleSubmit(name) {
            // console.log('adadsasd');
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            });
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        }
    }
};
</script>
<style scoped>
.ivu-form-item-error-tip {
  position: absolute;
  top: 0%;
  margin-left: 50%;
  left: 0;
  line-height: 1;
  padding-top: 6px;
  color: #ed3f14;
  float: left;
}
.ivu-input {
  display: inline-block;
  width: 50px;
  height: 32px;
  line-height: 1.5;
  padding: 4px 7px;
  font-size: 12px;
  border: 1px solid #d7dde4;
  border-radius: 4px;
  color: #657180;
  background-color: #fff;
  background-image: none;
  position: relative;
  cursor: text;
  transition: border 0.2s ease-in-out, background 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
}
</style>
