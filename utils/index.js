/**
 * Created with Cocos2d-x3.0 jsb.
 * User: liuwk
 * Date: 2020-05-18' 0018
 * Time: 15:21:10
 *
 */

import moment from 'moment'


export function FormatDate(date) {
    return moment(date).format('YYYY-MM-DD HH:mm:ss')
}