export class UserConstants {
    /** Consulta usuarios */
    public readonly TITLE = 'Users List';
    public readonly TITLE_ADD = 'Add User';
    public readonly TITLE_EDIT = 'Edit User';

    public readonly BTN_SAVE = 'Save';
    public readonly BTN_CANCEL = 'Cancel';

    public readonly ERROR_REQUIRED = 'Required field';
    public readonly ERROR_PATTERN_NUMBER = 'You can enter only numbers';
    public readonly ERROR_EMAIL = 'Email must be a valid email address';
    public readonly ERROR_MIN_LENGTH = 'Password must be at least 8 characters';
    public readonly ERROR_PATTERN_STRING = 'You can enter only letters';

    
    public readonly DATA_USER = {
        username: 'Username',
        name: 'Name',
        surnames: 'Surnames',
        email: 'Email',
        password: 'Password',
        age: 'Age',
        active: 'Active',
        lastLoggin: 'Last Loggin',
        creationDate: 'Creation Date',
        actions: 'Actions'
    };

}