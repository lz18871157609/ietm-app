const REQUESTSQL = {
 /*    login: 'select * from sys_user_role sur '
    + 'left join sys_role sr on sur.role_id = sr.role_id '
    + 'left join  sys_user su on sur.user_id = su.user_id where su.user_name = ? and su.user_pwd = ?', */
    queryAllUserList: 'select * from sys_user order by modify_time desc', // 获取用户列表
    login: 'select su.user_id, su.user_name, su.real_name, su.remark, su.phone, su.user_icon, su.create_time, su.create_user, su.modify_time, su.modify_user, su.status, su.security_level, su.security_type,'
    + ' sr.role_id, sr.role_name from sys_user_role sur '
    + ' LEFT JOIN  sys_user su on sur.user_id = su.user_id'
    + ' LEFT JOIN sys_role sr on sur.role_id = sr.role_id'
    + ' where su.user_name = ? and su.user_pwd = ?',
    loginJudge: 'select count(*) as num from sys_user where user_name = ?',
    queryMenuByRoleId: 'SELECT sm.menu_id, sm.menu_code, sm.menu_name, sm.icon, sm.link, sm.remark, sm.sort_no, sm.status, sm.parent_menu_id'
    + ' FROM sys_role_menu_action_rel srm '
    + ' LEFT JOIN sys_menu sm on srm.menu_id = sm.menu_id'
    + ' where srm.role_id = ? and srm.manual_id = 0',
    addUser: 'insert into sys_user values(?,?,?,?,?,?,?,?,?,?,?,?)', // 新增用户
    addLog: 'insert into sys_log values(NULL,?,?,?,?,?,?,?,?,?,?)',
   // queryAllLogsByUserId: 'select * from sys_log where modify_user = ?',
    queryAllLogsByUserId: 'select * from sys_log',
}

export { REQUESTSQL }