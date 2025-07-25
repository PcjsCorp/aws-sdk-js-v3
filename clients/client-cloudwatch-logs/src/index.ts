// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>You can use Amazon CloudWatch Logs to monitor, store, and access your log files from
 *       EC2 instances, CloudTrail, and other sources. You can then retrieve the associated
 *       log data from CloudWatch Logs using the CloudWatch console. Alternatively, you can use
 *       CloudWatch Logs commands in the Amazon Web Services CLI, CloudWatch Logs API, or CloudWatch
 *       Logs SDK.</p>
 *          <p>You can use CloudWatch Logs to:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Monitor logs from EC2 instances in real time</b>: You
 *           can use CloudWatch Logs to monitor applications and systems using log data. For example,
 *           CloudWatch Logs can track the number of errors that occur in your application logs. Then,
 *           it can send you a notification whenever the rate of errors exceeds a threshold that you
 *           specify. CloudWatch Logs uses your log data for monitoring so no code changes are
 *           required. For example, you can monitor application logs for specific literal terms (such
 *           as "NullReferenceException"). You can also count the number of occurrences of a literal
 *           term at a particular position in log data (such as "404" status codes in an Apache access
 *           log). When the term you are searching for is found, CloudWatch Logs reports the data to a
 *           CloudWatch metric that you specify.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Monitor CloudTrail logged events</b>: You
 *           can create alarms in CloudWatch and receive notifications of particular API activity as
 *           captured by CloudTrail. You can use the notification to perform troubleshooting.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Archive log data</b>: You can use CloudWatch Logs to
 *           store your log data in highly durable storage. You can change the log retention setting so
 *           that any log events earlier than this setting are automatically deleted. The CloudWatch
 *           Logs agent helps to quickly send both rotated and non-rotated log data off of a host and
 *           into the log service. You can then access the raw log data when you need it.</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./CloudWatchLogsClient";
export * from "./CloudWatchLogs";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CloudWatchLogsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { CloudWatchLogsServiceException } from "./models/CloudWatchLogsServiceException";
