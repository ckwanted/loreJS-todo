 /**
 * This file is where you define overrides for the default routing behavior.
 * Currently this includes how you want your routing display (using hash
 * history or push state).
 **/

import { browserHistory } from 'react-router';

export default {

  /************************************************************************************
  *                                                                                   *
  * Whether browser should use pushState or hash to keep track of routes              *
  * See: https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md *
  *                                                                                   *
  *************************************************************************************/

  history: browserHistory

}
