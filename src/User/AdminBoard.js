import {makeAutoObservable} from "mobx";

export default class AdminBoard {
    constructor() {
        this._admins = [];
        this._teachers = [];
        this._students = [];
        this._groups = [];
        this._subscriptions = [];
        this._gender = [];
        this._regularClass = [];
        this._studentStatus = [];
        this._selectedAdmin = {};
        this._selectedTeacher = {};
        this._selectedGroup = {};
        this._selectedRegularClass = {};
        this._selectedSubs = {};
        this._selectedGender = {};
        this._selectedStudentStatus = {};
        this._page = 1
        makeAutoObservable(this);
    }

    setAdmins(admins) {
        this._admins = admins;
    }

    setTeachers(teachers) {
        this._teachers = teachers;
    }

    setStudents(students) {
        this._students = students;
    }

    setGroups(groups) {
        this._groups = groups;
    }

    setRegularClass(classes) {
        this._regularClass = classes;
    }

    setSubscriptions(subscriptions) {
        this._subscriptions = subscriptions;
    }

    setGender(gender) {
        this._gender = gender;
    }

    setStudentStatus(status) {
        this._studentStatus = status;
    }

    setSelectedAdmin(admin) {
        this.setPage(1);
        this._selectedAdmin = admin;
    }

    setSelectedTeacher(teacher) {
        this.setPage(1);
        this._selectedTeacher = teacher;
    }

    setSelectedGroup(group) {
        this.setPage(1);
        this._selectedGroup = group;
    }
    setSelectedRegularClass(classes) {
        this.setPage(1);
        this._selectedRegularClass = classes;
    }

    setSelectedSubs(subs) {
        this.setPage(1);
        this._selectedSubs = subs;
    }

    setSelectedGender(gender) {
        this.setPage(1);
        this._selectedGender = gender;
    }

    setSelectedStudentStatus(st) {
        this.setPage(1);
        this._selectedStudentStatus = st;
    }

    setPage(page) {
        this._page = page;
    }

    get admins() {
        return this._admins;
    }

    get teachers() {
        return this._teachers;
    }

    get students() {
        return this._students;
    }

    get groups() {
        return this._groups;
    }

    get regularClass() {
        return this._regularClass;
    }

    get subscriptions() {
        return this._subscriptions;
    }

    get gender() {
        return this._gender;
    }

    get studentStatus() {
        return this._studentStatus;
    }

    get selectedAdmin() {
        return this._selectedAdmin;
    }

    get selectedTeacher() {
        return this._selectedTeacher;
    }

    get selectedGroup() {
        return this._selectedGroup;
    }

    get selectedRegularClass() {
        return this._selectedRegularClass;
    }

    get selectedSubs() {
        return this._selectedSubs;
    }

    get selectedGender() {
        return this._selectedGender;
    }

    get selectedStudentStatus() {
        return this._selectedStudentStatus;
    }

    get page() {
        return this._page
    }
}