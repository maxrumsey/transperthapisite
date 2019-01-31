/**
 * @api {get} /api/v1/smartrider SmartRider Information
 * @apiName Get SmartRider Info
 * @apiDescription Get information about a SmartRider from it's individual card number.
 * @apiGroup SmartRider
 * @apiVersion 1.0.0
 * @apiSampleRequest /api/v1/smartrider
 * @apiParam {String} card_number SmartRider's unique card number.
 *
 * @apiExample Example 1:
 *    /api/v1/smartrider/card_number=123456789
 * @apiExample Example 2:
 *    /api/v1/smartrider/card_number=SR123456789
 * @apiExample Example 3:
 *    // %20 (spaces) can be placed inside the card_number parameter.
 *    /api/v1/smartrider/card_number=SR%201234%205678%209
 * @apiSuccess {string} balance Balance of the SmartRider
 * @apiSuccess {string} conc_type SmartRider's concession type, (if any)
 * @apiSuccess {string} conc_expiry Expiry of concession, (if any)
 * @apiSuccess {string} autoload Whether autoload is enabled on the SmartRider
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "balance": "$10.00",
 *       "conc_type": "Seniors",
 *       "conc_expiry": "10/10/2020",
 *       "autoload": "True"
 *     }
 *
 * @apiError CardNumberNotFound The card number was not included in the query string.
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "msg": "Card number not found in query string."
 *     }
 */
 /**
  * @api {get} /api/v1/busTimes Bus Times
  * @apiName Get Bus Stop Schedule
  * @apiDescription Get information about the next busses scheduled to arrive at a bus stop from the stop number of said bus stop.
  * @apiGroup Transit
  * @apiVersion 1.0.0
  * @apiSampleRequest /api/v1/busTimes
  * @apiParam {String} stop_number The stop number of the bus stop.
  *
  * @apiExample Example:
  *    /api/v1/busTimes/stop_number=20259
  * @apiSuccess {array} buses An array of the next busses scheduled to arrive at the bus stop.
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "buses": [
  *         {
  *           "route": 999, "time": "14:06", "destination": "To Fremantle Stn"
  *         }
  *       ]
  *     }
  *
  * @apiError StopNumberNotFound The stop number was not included in the query string.
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 404 Not Found
  *     {
  *       "msg": "Bus stop number not found in query string."
  *     }
  */
  /**
   * @api {get} /api/v1/ferryTimes Ferry Times
   * @apiName Get Ferry Stop Schedule
   * @apiGroup Transit
   * @apiDescription Get information about ferries scheduled to arrive at a wharf from the wharf's stop number.
   * @apiVersion 1.0.0
   * @apiSampleRequest /api/v1/ferryTimes
   * @apiParam {String} stop_number The stop number of the ferry stop.
   *
   * @apiExample Example:
   *    /api/v1/ferryTimes/stop_number=99998
   * @apiSuccess {array} ferries An array of the next ferries scheduled to arrive at the ferry stop.
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "ferries": [
   *         {
   *           "route": 999, "time": "14:06", "destination": "To Fremantle Stn"
   *         }
   *       ]
   *     }
   *
   * @apiError StopNumberNotFound The stop number was not included in the query string.
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "msg": "Ferry stop number not found in query string."
   *     }
   */
   /**
    * @api {get} /api/v1/trainTimes Train Times
    * @apiName Get Train Arrival Schedule
    * @apiGroup Transit
    * @apiDescription Get information about trains scheduled to arrive at a train station.
    * @apiVersion 1.0.0
    * @apiSampleRequest /api/v1/trainTimes
    * @apiParam {String="to Perth", "from Perth"} direction The direction the train is travelling.
    * @apiParam {String} trainline The name of the trainline the train is travelling along.
    * @apiParam {String} station The name of the station the trains will be arriving at.

    *
    * @apiExample Example:
    *    /api/v1/trainTimes/stop_number=99998
    * @apiSuccess {array} trains An array of the next trains scheduled to arrive at the train station.
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *       "trains": [
    *         {
    *           "platform": "1", "stopping_pattern": "..., ..., ..,", "running_time": "14:14", "scheduled_time": "14:14"
    *         }
    *       ]
    *     }
    *
    * @apiError DirectionNotValid The direction of the train was not found or not one of 'to Perth' and 'from Perth'.
    * @apiError StationNotFound The station was not found present in the query string.
    * @apiError TrainlineNotFound The trainline was not found in the query string.
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "msg": "Train station not found in query string."
    *     }
    */
