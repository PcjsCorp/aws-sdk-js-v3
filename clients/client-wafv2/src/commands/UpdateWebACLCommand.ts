// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWebACLRequest, UpdateWebACLResponse } from "../models/models_0";
import { de_UpdateWebACLCommand, se_UpdateWebACLCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWebACLCommand}.
 */
export interface UpdateWebACLCommandInput extends UpdateWebACLRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWebACLCommand}.
 */
export interface UpdateWebACLCommandOutput extends UpdateWebACLResponse, __MetadataBearer {}

/**
 * <p>Updates the specified <a>WebACL</a>. While updating a web ACL, WAF provides
 *          continuous coverage to the resources that you have associated with the web ACL. </p>
 *          <note>
 *             <p>This operation completely replaces the mutable specifications that you already have for the web ACL with the ones that you provide to this call. </p>
 *             <p>To modify a web ACL, do the following: </p>
 *             <ol>
 *                <li>
 *                   <p>Retrieve it by calling <a>GetWebACL</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>Update its settings as needed</p>
 *                </li>
 *                <li>
 *                   <p>Provide the complete web ACL specification to this call</p>
 *                </li>
 *             </ol>
 *          </note>
 *          <p> A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types <a>Rule</a>, <a>RuleGroup</a>, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resource types include Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, Amplify application, and Amazon Web Services Verified Access instance.  </p>
 *          <p>
 *             <b>Temporary inconsistencies during updates</b>
 *          </p>
 *          <p>When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. </p>
 *          <p>The following are examples of the temporary inconsistencies that you might notice during change propagation: </p>
 *          <ul>
 *             <li>
 *                <p>After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. </p>
 *             </li>
 *             <li>
 *                <p>After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.</p>
 *             </li>
 *             <li>
 *                <p>After you change a rule action setting, you might see the old action in some places and the new action in others. </p>
 *             </li>
 *             <li>
 *                <p>After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateWebACLCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateWebACLCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // UpdateWebACLRequest
 *   Name: "STRING_VALUE", // required
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   Id: "STRING_VALUE", // required
 *   DefaultAction: { // DefaultAction
 *     Block: { // BlockAction
 *       CustomResponse: { // CustomResponse
 *         ResponseCode: Number("int"), // required
 *         CustomResponseBodyKey: "STRING_VALUE",
 *         ResponseHeaders: [ // CustomHTTPHeaders
 *           { // CustomHTTPHeader
 *             Name: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *     Allow: { // AllowAction
 *       CustomRequestHandling: { // CustomRequestHandling
 *         InsertHeaders: [ // required
 *           {
 *             Name: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   Rules: [ // Rules
 *     { // Rule
 *       Name: "STRING_VALUE", // required
 *       Priority: Number("int"), // required
 *       Statement: { // Statement
 *         ByteMatchStatement: { // ByteMatchStatement
 *           SearchString: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")           // required
 *           FieldToMatch: { // FieldToMatch
 *             SingleHeader: { // SingleHeader
 *               Name: "STRING_VALUE", // required
 *             },
 *             SingleQueryArgument: { // SingleQueryArgument
 *               Name: "STRING_VALUE", // required
 *             },
 *             AllQueryArguments: {},
 *             UriPath: {},
 *             QueryString: {},
 *             Body: { // Body
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Method: {},
 *             JsonBody: { // JsonBody
 *               MatchPattern: { // JsonMatchPattern
 *                 All: {},
 *                 IncludedPaths: [ // JsonPointerPaths
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Headers: { // Headers
 *               MatchPattern: { // HeaderMatchPattern
 *                 All: {},
 *                 IncludedHeaders: [ // HeaderNames
 *                   "STRING_VALUE",
 *                 ],
 *                 ExcludedHeaders: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             Cookies: { // Cookies
 *               MatchPattern: { // CookieMatchPattern
 *                 All: {},
 *                 IncludedCookies: [ // CookieNames
 *                   "STRING_VALUE",
 *                 ],
 *                 ExcludedCookies: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             HeaderOrder: { // HeaderOrder
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             JA3Fingerprint: { // JA3Fingerprint
 *               FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *             },
 *             JA4Fingerprint: { // JA4Fingerprint
 *               FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *             },
 *             UriFragment: { // UriFragment
 *               FallbackBehavior: "MATCH" || "NO_MATCH",
 *             },
 *           },
 *           TextTransformations: [ // TextTransformations // required
 *             { // TextTransformation
 *               Priority: Number("int"), // required
 *               Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 *             },
 *           ],
 *           PositionalConstraint: "EXACTLY" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CONTAINS_WORD", // required
 *         },
 *         SqliMatchStatement: { // SqliMatchStatement
 *           FieldToMatch: {
 *             SingleHeader: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             SingleQueryArgument: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             AllQueryArguments: {},
 *             UriPath: {},
 *             QueryString: {},
 *             Body: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Method: {},
 *             JsonBody: {
 *               MatchPattern: {
 *                 All: {},
 *                 IncludedPaths: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Headers: {
 *               MatchPattern: {
 *                 All: {},
 *                 IncludedHeaders: [
 *                   "STRING_VALUE",
 *                 ],
 *                 ExcludedHeaders: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             Cookies: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedCookies: [
 *                   "STRING_VALUE",
 *                 ],
 *                 ExcludedCookies: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             HeaderOrder: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             JA3Fingerprint: {
 *               FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *             },
 *             JA4Fingerprint: {
 *               FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *             },
 *             UriFragment: {
 *               FallbackBehavior: "MATCH" || "NO_MATCH",
 *             },
 *           },
 *           TextTransformations: [ // required
 *             {
 *               Priority: Number("int"), // required
 *               Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 *             },
 *           ],
 *           SensitivityLevel: "LOW" || "HIGH",
 *         },
 *         XssMatchStatement: { // XssMatchStatement
 *           FieldToMatch: {
 *             SingleHeader: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             SingleQueryArgument: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             AllQueryArguments: {},
 *             UriPath: {},
 *             QueryString: {},
 *             Body: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Method: {},
 *             JsonBody: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedPaths: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Headers: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedHeaders: [
 *                   "STRING_VALUE",
 *                 ],
 *                 ExcludedHeaders: "<HeaderNames>",
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             Cookies: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedCookies: [
 *                   "STRING_VALUE",
 *                 ],
 *                 ExcludedCookies: "<CookieNames>",
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             HeaderOrder: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             JA3Fingerprint: {
 *               FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *             },
 *             JA4Fingerprint: {
 *               FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *             },
 *             UriFragment: {
 *               FallbackBehavior: "MATCH" || "NO_MATCH",
 *             },
 *           },
 *           TextTransformations: [ // required
 *             {
 *               Priority: Number("int"), // required
 *               Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 *             },
 *           ],
 *         },
 *         SizeConstraintStatement: { // SizeConstraintStatement
 *           FieldToMatch: {
 *             SingleHeader: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             SingleQueryArgument: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             AllQueryArguments: {},
 *             UriPath: {},
 *             QueryString: {},
 *             Body: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Method: {},
 *             JsonBody: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedPaths: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Headers: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedHeaders: "<HeaderNames>",
 *                 ExcludedHeaders: "<HeaderNames>",
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             Cookies: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedCookies: "<CookieNames>",
 *                 ExcludedCookies: "<CookieNames>",
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             HeaderOrder: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             JA3Fingerprint: {
 *               FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *             },
 *             JA4Fingerprint: {
 *               FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *             },
 *             UriFragment: {
 *               FallbackBehavior: "MATCH" || "NO_MATCH",
 *             },
 *           },
 *           ComparisonOperator: "EQ" || "NE" || "LE" || "LT" || "GE" || "GT", // required
 *           Size: Number("long"), // required
 *           TextTransformations: [ // required
 *             {
 *               Priority: Number("int"), // required
 *               Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 *             },
 *           ],
 *         },
 *         GeoMatchStatement: { // GeoMatchStatement
 *           CountryCodes: [ // CountryCodes
 *             "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CD" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KP" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "US" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW" || "XK",
 *           ],
 *           ForwardedIPConfig: { // ForwardedIPConfig
 *             HeaderName: "STRING_VALUE", // required
 *             FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *           },
 *         },
 *         RuleGroupReferenceStatement: { // RuleGroupReferenceStatement
 *           ARN: "STRING_VALUE", // required
 *           ExcludedRules: [ // ExcludedRules
 *             { // ExcludedRule
 *               Name: "STRING_VALUE", // required
 *             },
 *           ],
 *           RuleActionOverrides: [ // RuleActionOverrides
 *             { // RuleActionOverride
 *               Name: "STRING_VALUE", // required
 *               ActionToUse: { // RuleAction
 *                 Block: {
 *                   CustomResponse: {
 *                     ResponseCode: Number("int"), // required
 *                     CustomResponseBodyKey: "STRING_VALUE",
 *                     ResponseHeaders: [
 *                       {
 *                         Name: "STRING_VALUE", // required
 *                         Value: "STRING_VALUE", // required
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 Allow: {
 *                   CustomRequestHandling: {
 *                     InsertHeaders: [ // required
 *                       {
 *                         Name: "STRING_VALUE", // required
 *                         Value: "STRING_VALUE", // required
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 Count: { // CountAction
 *                   CustomRequestHandling: {
 *                     InsertHeaders: [ // required
 *                       {
 *                         Name: "STRING_VALUE", // required
 *                         Value: "STRING_VALUE", // required
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 Captcha: { // CaptchaAction
 *                   CustomRequestHandling: {
 *                     InsertHeaders: "<CustomHTTPHeaders>", // required
 *                   },
 *                 },
 *                 Challenge: { // ChallengeAction
 *                   CustomRequestHandling: {
 *                     InsertHeaders: "<CustomHTTPHeaders>", // required
 *                   },
 *                 },
 *               },
 *             },
 *           ],
 *         },
 *         IPSetReferenceStatement: { // IPSetReferenceStatement
 *           ARN: "STRING_VALUE", // required
 *           IPSetForwardedIPConfig: { // IPSetForwardedIPConfig
 *             HeaderName: "STRING_VALUE", // required
 *             FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *             Position: "FIRST" || "LAST" || "ANY", // required
 *           },
 *         },
 *         RegexPatternSetReferenceStatement: { // RegexPatternSetReferenceStatement
 *           ARN: "STRING_VALUE", // required
 *           FieldToMatch: {
 *             SingleHeader: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             SingleQueryArgument: {
 *               Name: "STRING_VALUE", // required
 *             },
 *             AllQueryArguments: {},
 *             UriPath: {},
 *             QueryString: {},
 *             Body: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Method: {},
 *             JsonBody: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedPaths: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               InvalidFallbackBehavior: "MATCH" || "NO_MATCH" || "EVALUATE_AS_STRING",
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH",
 *             },
 *             Headers: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedHeaders: "<HeaderNames>",
 *                 ExcludedHeaders: "<HeaderNames>",
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             Cookies: {
 *               MatchPattern: {
 *                 All: "<All>",
 *                 IncludedCookies: "<CookieNames>",
 *                 ExcludedCookies: "<CookieNames>",
 *               },
 *               MatchScope: "ALL" || "KEY" || "VALUE", // required
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             HeaderOrder: {
 *               OversizeHandling: "CONTINUE" || "MATCH" || "NO_MATCH", // required
 *             },
 *             JA3Fingerprint: {
 *               FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *             },
 *             JA4Fingerprint: {
 *               FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *             },
 *             UriFragment: {
 *               FallbackBehavior: "MATCH" || "NO_MATCH",
 *             },
 *           },
 *           TextTransformations: [ // required
 *             {
 *               Priority: Number("int"), // required
 *               Type: "NONE" || "COMPRESS_WHITE_SPACE" || "HTML_ENTITY_DECODE" || "LOWERCASE" || "CMD_LINE" || "URL_DECODE" || "BASE64_DECODE" || "HEX_DECODE" || "MD5" || "REPLACE_COMMENTS" || "ESCAPE_SEQ_DECODE" || "SQL_HEX_DECODE" || "CSS_DECODE" || "JS_DECODE" || "NORMALIZE_PATH" || "NORMALIZE_PATH_WIN" || "REMOVE_NULLS" || "REPLACE_NULLS" || "BASE64_DECODE_EXT" || "URL_DECODE_UNI" || "UTF8_TO_UNICODE", // required
 *             },
 *           ],
 *         },
 *         RateBasedStatement: { // RateBasedStatement
 *           Limit: Number("long"), // required
 *           EvaluationWindowSec: Number("long"),
 *           AggregateKeyType: "IP" || "FORWARDED_IP" || "CUSTOM_KEYS" || "CONSTANT", // required
 *           ScopeDownStatement: {
 *             ByteMatchStatement: {
 *               SearchString: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")               // required
 *               FieldToMatch: "<FieldToMatch>", // required
 *               TextTransformations: "<TextTransformations>", // required
 *               PositionalConstraint: "EXACTLY" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS" || "CONTAINS_WORD", // required
 *             },
 *             SqliMatchStatement: {
 *               FieldToMatch: "<FieldToMatch>", // required
 *               TextTransformations: "<TextTransformations>", // required
 *               SensitivityLevel: "LOW" || "HIGH",
 *             },
 *             XssMatchStatement: {
 *               FieldToMatch: "<FieldToMatch>", // required
 *               TextTransformations: "<TextTransformations>", // required
 *             },
 *             SizeConstraintStatement: {
 *               FieldToMatch: "<FieldToMatch>", // required
 *               ComparisonOperator: "EQ" || "NE" || "LE" || "LT" || "GE" || "GT", // required
 *               Size: Number("long"), // required
 *               TextTransformations: "<TextTransformations>", // required
 *             },
 *             GeoMatchStatement: {
 *               CountryCodes: [
 *                 "AF" || "AX" || "AL" || "DZ" || "AS" || "AD" || "AO" || "AI" || "AQ" || "AG" || "AR" || "AM" || "AW" || "AU" || "AT" || "AZ" || "BS" || "BH" || "BD" || "BB" || "BY" || "BE" || "BZ" || "BJ" || "BM" || "BT" || "BO" || "BQ" || "BA" || "BW" || "BV" || "BR" || "IO" || "BN" || "BG" || "BF" || "BI" || "KH" || "CM" || "CA" || "CV" || "KY" || "CF" || "TD" || "CL" || "CN" || "CX" || "CC" || "CO" || "KM" || "CG" || "CD" || "CK" || "CR" || "CI" || "HR" || "CU" || "CW" || "CY" || "CZ" || "DK" || "DJ" || "DM" || "DO" || "EC" || "EG" || "SV" || "GQ" || "ER" || "EE" || "ET" || "FK" || "FO" || "FJ" || "FI" || "FR" || "GF" || "PF" || "TF" || "GA" || "GM" || "GE" || "DE" || "GH" || "GI" || "GR" || "GL" || "GD" || "GP" || "GU" || "GT" || "GG" || "GN" || "GW" || "GY" || "HT" || "HM" || "VA" || "HN" || "HK" || "HU" || "IS" || "IN" || "ID" || "IR" || "IQ" || "IE" || "IM" || "IL" || "IT" || "JM" || "JP" || "JE" || "JO" || "KZ" || "KE" || "KI" || "KP" || "KR" || "KW" || "KG" || "LA" || "LV" || "LB" || "LS" || "LR" || "LY" || "LI" || "LT" || "LU" || "MO" || "MK" || "MG" || "MW" || "MY" || "MV" || "ML" || "MT" || "MH" || "MQ" || "MR" || "MU" || "YT" || "MX" || "FM" || "MD" || "MC" || "MN" || "ME" || "MS" || "MA" || "MZ" || "MM" || "NA" || "NR" || "NP" || "NL" || "NC" || "NZ" || "NI" || "NE" || "NG" || "NU" || "NF" || "MP" || "NO" || "OM" || "PK" || "PW" || "PS" || "PA" || "PG" || "PY" || "PE" || "PH" || "PN" || "PL" || "PT" || "PR" || "QA" || "RE" || "RO" || "RU" || "RW" || "BL" || "SH" || "KN" || "LC" || "MF" || "PM" || "VC" || "WS" || "SM" || "ST" || "SA" || "SN" || "RS" || "SC" || "SL" || "SG" || "SX" || "SK" || "SI" || "SB" || "SO" || "ZA" || "GS" || "SS" || "ES" || "LK" || "SD" || "SR" || "SJ" || "SZ" || "SE" || "CH" || "SY" || "TW" || "TJ" || "TZ" || "TH" || "TL" || "TG" || "TK" || "TO" || "TT" || "TN" || "TR" || "TM" || "TC" || "TV" || "UG" || "UA" || "AE" || "GB" || "US" || "UM" || "UY" || "UZ" || "VU" || "VE" || "VN" || "VG" || "VI" || "WF" || "EH" || "YE" || "ZM" || "ZW" || "XK",
 *               ],
 *               ForwardedIPConfig: {
 *                 HeaderName: "STRING_VALUE", // required
 *                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *               },
 *             },
 *             RuleGroupReferenceStatement: {
 *               ARN: "STRING_VALUE", // required
 *               ExcludedRules: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                 },
 *               ],
 *               RuleActionOverrides: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   ActionToUse: {
 *                     Block: "<BlockAction>",
 *                     Allow: "<AllowAction>",
 *                     Count: {
 *                       CustomRequestHandling: "<CustomRequestHandling>",
 *                     },
 *                     Captcha: {
 *                       CustomRequestHandling: "<CustomRequestHandling>",
 *                     },
 *                     Challenge: {
 *                       CustomRequestHandling: "<CustomRequestHandling>",
 *                     },
 *                   },
 *                 },
 *               ],
 *             },
 *             IPSetReferenceStatement: {
 *               ARN: "STRING_VALUE", // required
 *               IPSetForwardedIPConfig: {
 *                 HeaderName: "STRING_VALUE", // required
 *                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *                 Position: "FIRST" || "LAST" || "ANY", // required
 *               },
 *             },
 *             RegexPatternSetReferenceStatement: {
 *               ARN: "STRING_VALUE", // required
 *               FieldToMatch: "<FieldToMatch>", // required
 *               TextTransformations: "<TextTransformations>", // required
 *             },
 *             RateBasedStatement: {
 *               Limit: Number("long"), // required
 *               EvaluationWindowSec: Number("long"),
 *               AggregateKeyType: "IP" || "FORWARDED_IP" || "CUSTOM_KEYS" || "CONSTANT", // required
 *               ScopeDownStatement: "<Statement>",
 *               ForwardedIPConfig: {
 *                 HeaderName: "STRING_VALUE", // required
 *                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *               },
 *               CustomKeys: [ // RateBasedStatementCustomKeys
 *                 { // RateBasedStatementCustomKey
 *                   Header: { // RateLimitHeader
 *                     Name: "STRING_VALUE", // required
 *                     TextTransformations: "<TextTransformations>", // required
 *                   },
 *                   Cookie: { // RateLimitCookie
 *                     Name: "STRING_VALUE", // required
 *                     TextTransformations: "<TextTransformations>", // required
 *                   },
 *                   QueryArgument: { // RateLimitQueryArgument
 *                     Name: "STRING_VALUE", // required
 *                     TextTransformations: "<TextTransformations>", // required
 *                   },
 *                   QueryString: { // RateLimitQueryString
 *                     TextTransformations: "<TextTransformations>", // required
 *                   },
 *                   HTTPMethod: {},
 *                   ForwardedIP: {},
 *                   IP: {},
 *                   LabelNamespace: { // RateLimitLabelNamespace
 *                     Namespace: "STRING_VALUE", // required
 *                   },
 *                   UriPath: { // RateLimitUriPath
 *                     TextTransformations: "<TextTransformations>", // required
 *                   },
 *                   JA3Fingerprint: { // RateLimitJA3Fingerprint
 *                     FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *                   },
 *                   JA4Fingerprint: { // RateLimitJA4Fingerprint
 *                     FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *                   },
 *                   ASN: {},
 *                 },
 *               ],
 *             },
 *             AndStatement: { // AndStatement
 *               Statements: [ // Statements // required
 *                 "<Statement>",
 *               ],
 *             },
 *             OrStatement: { // OrStatement
 *               Statements: [ // required
 *                 "<Statement>",
 *               ],
 *             },
 *             NotStatement: { // NotStatement
 *               Statement: "<Statement>", // required
 *             },
 *             ManagedRuleGroupStatement: { // ManagedRuleGroupStatement
 *               VendorName: "STRING_VALUE", // required
 *               Name: "STRING_VALUE", // required
 *               Version: "STRING_VALUE",
 *               ExcludedRules: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                 },
 *               ],
 *               ScopeDownStatement: "<Statement>",
 *               ManagedRuleGroupConfigs: [ // ManagedRuleGroupConfigs
 *                 { // ManagedRuleGroupConfig
 *                   LoginPath: "STRING_VALUE",
 *                   PayloadType: "JSON" || "FORM_ENCODED",
 *                   UsernameField: { // UsernameField
 *                     Identifier: "STRING_VALUE", // required
 *                   },
 *                   PasswordField: { // PasswordField
 *                     Identifier: "STRING_VALUE", // required
 *                   },
 *                   AWSManagedRulesBotControlRuleSet: { // AWSManagedRulesBotControlRuleSet
 *                     InspectionLevel: "COMMON" || "TARGETED", // required
 *                     EnableMachineLearning: true || false,
 *                   },
 *                   AWSManagedRulesATPRuleSet: { // AWSManagedRulesATPRuleSet
 *                     LoginPath: "STRING_VALUE", // required
 *                     RequestInspection: { // RequestInspection
 *                       PayloadType: "JSON" || "FORM_ENCODED", // required
 *                       UsernameField: {
 *                         Identifier: "STRING_VALUE", // required
 *                       },
 *                       PasswordField: {
 *                         Identifier: "STRING_VALUE", // required
 *                       },
 *                     },
 *                     ResponseInspection: { // ResponseInspection
 *                       StatusCode: { // ResponseInspectionStatusCode
 *                         SuccessCodes: [ // ResponseInspectionStatusCodeSuccessCodes // required
 *                           Number("int"),
 *                         ],
 *                         FailureCodes: [ // ResponseInspectionStatusCodeFailureCodes // required
 *                           Number("int"),
 *                         ],
 *                       },
 *                       Header: { // ResponseInspectionHeader
 *                         Name: "STRING_VALUE", // required
 *                         SuccessValues: [ // ResponseInspectionHeaderSuccessValues // required
 *                           "STRING_VALUE",
 *                         ],
 *                         FailureValues: [ // ResponseInspectionHeaderFailureValues // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                       BodyContains: { // ResponseInspectionBodyContains
 *                         SuccessStrings: [ // ResponseInspectionBodyContainsSuccessStrings // required
 *                           "STRING_VALUE",
 *                         ],
 *                         FailureStrings: [ // ResponseInspectionBodyContainsFailureStrings // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                       Json: { // ResponseInspectionJson
 *                         Identifier: "STRING_VALUE", // required
 *                         SuccessValues: [ // ResponseInspectionJsonSuccessValues // required
 *                           "STRING_VALUE",
 *                         ],
 *                         FailureValues: [ // ResponseInspectionJsonFailureValues // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                     },
 *                     EnableRegexInPath: true || false,
 *                   },
 *                   AWSManagedRulesACFPRuleSet: { // AWSManagedRulesACFPRuleSet
 *                     CreationPath: "STRING_VALUE", // required
 *                     RegistrationPagePath: "STRING_VALUE", // required
 *                     RequestInspection: { // RequestInspectionACFP
 *                       PayloadType: "JSON" || "FORM_ENCODED", // required
 *                       UsernameField: {
 *                         Identifier: "STRING_VALUE", // required
 *                       },
 *                       PasswordField: {
 *                         Identifier: "STRING_VALUE", // required
 *                       },
 *                       EmailField: { // EmailField
 *                         Identifier: "STRING_VALUE", // required
 *                       },
 *                       PhoneNumberFields: [ // PhoneNumberFields
 *                         { // PhoneNumberField
 *                           Identifier: "STRING_VALUE", // required
 *                         },
 *                       ],
 *                       AddressFields: [ // AddressFields
 *                         { // AddressField
 *                           Identifier: "STRING_VALUE", // required
 *                         },
 *                       ],
 *                     },
 *                     ResponseInspection: {
 *                       StatusCode: {
 *                         SuccessCodes: [ // required
 *                           Number("int"),
 *                         ],
 *                         FailureCodes: [ // required
 *                           Number("int"),
 *                         ],
 *                       },
 *                       Header: {
 *                         Name: "STRING_VALUE", // required
 *                         SuccessValues: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                         FailureValues: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                       BodyContains: {
 *                         SuccessStrings: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                         FailureStrings: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                       Json: {
 *                         Identifier: "STRING_VALUE", // required
 *                         SuccessValues: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                         FailureValues: [ // required
 *                           "STRING_VALUE",
 *                         ],
 *                       },
 *                     },
 *                     EnableRegexInPath: true || false,
 *                   },
 *                   AWSManagedRulesAntiDDoSRuleSet: { // AWSManagedRulesAntiDDoSRuleSet
 *                     ClientSideActionConfig: { // ClientSideActionConfig
 *                       Challenge: { // ClientSideAction
 *                         UsageOfAction: "ENABLED" || "DISABLED", // required
 *                         Sensitivity: "LOW" || "MEDIUM" || "HIGH",
 *                         ExemptUriRegularExpressions: [ // RegularExpressionList
 *                           { // Regex
 *                             RegexString: "STRING_VALUE",
 *                           },
 *                         ],
 *                       },
 *                     },
 *                     SensitivityToBlock: "LOW" || "MEDIUM" || "HIGH",
 *                   },
 *                 },
 *               ],
 *               RuleActionOverrides: [
 *                 {
 *                   Name: "STRING_VALUE", // required
 *                   ActionToUse: {
 *                     Block: "<BlockAction>",
 *                     Allow: "<AllowAction>",
 *                     Count: {
 *                       CustomRequestHandling: "<CustomRequestHandling>",
 *                     },
 *                     Captcha: {
 *                       CustomRequestHandling: "<CustomRequestHandling>",
 *                     },
 *                     Challenge: {
 *                       CustomRequestHandling: "<CustomRequestHandling>",
 *                     },
 *                   },
 *                 },
 *               ],
 *             },
 *             LabelMatchStatement: { // LabelMatchStatement
 *               Scope: "LABEL" || "NAMESPACE", // required
 *               Key: "STRING_VALUE", // required
 *             },
 *             RegexMatchStatement: { // RegexMatchStatement
 *               RegexString: "STRING_VALUE", // required
 *               FieldToMatch: "<FieldToMatch>", // required
 *               TextTransformations: "<TextTransformations>", // required
 *             },
 *             AsnMatchStatement: { // AsnMatchStatement
 *               AsnList: [ // AsnList // required
 *                 Number("long"),
 *               ],
 *               ForwardedIPConfig: {
 *                 HeaderName: "STRING_VALUE", // required
 *                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *               },
 *             },
 *           },
 *           ForwardedIPConfig: {
 *             HeaderName: "STRING_VALUE", // required
 *             FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *           },
 *           CustomKeys: [
 *             {
 *               Header: {
 *                 Name: "STRING_VALUE", // required
 *                 TextTransformations: "<TextTransformations>", // required
 *               },
 *               Cookie: {
 *                 Name: "STRING_VALUE", // required
 *                 TextTransformations: "<TextTransformations>", // required
 *               },
 *               QueryArgument: {
 *                 Name: "STRING_VALUE", // required
 *                 TextTransformations: "<TextTransformations>", // required
 *               },
 *               QueryString: {
 *                 TextTransformations: "<TextTransformations>", // required
 *               },
 *               HTTPMethod: {},
 *               ForwardedIP: {},
 *               IP: {},
 *               LabelNamespace: {
 *                 Namespace: "STRING_VALUE", // required
 *               },
 *               UriPath: {
 *                 TextTransformations: "<TextTransformations>", // required
 *               },
 *               JA3Fingerprint: {
 *                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *               },
 *               JA4Fingerprint: {
 *                 FallbackBehavior: "MATCH" || "NO_MATCH", // required
 *               },
 *               ASN: {},
 *             },
 *           ],
 *         },
 *         AndStatement: {
 *           Statements: [ // required
 *             "<Statement>",
 *           ],
 *         },
 *         OrStatement: {
 *           Statements: [ // required
 *             "<Statement>",
 *           ],
 *         },
 *         NotStatement: {
 *           Statement: "<Statement>", // required
 *         },
 *         ManagedRuleGroupStatement: {
 *           VendorName: "STRING_VALUE", // required
 *           Name: "STRING_VALUE", // required
 *           Version: "STRING_VALUE",
 *           ExcludedRules: [
 *             {
 *               Name: "STRING_VALUE", // required
 *             },
 *           ],
 *           ScopeDownStatement: "<Statement>",
 *           ManagedRuleGroupConfigs: [
 *             {
 *               LoginPath: "STRING_VALUE",
 *               PayloadType: "JSON" || "FORM_ENCODED",
 *               UsernameField: "<UsernameField>",
 *               PasswordField: "<PasswordField>",
 *               AWSManagedRulesBotControlRuleSet: {
 *                 InspectionLevel: "COMMON" || "TARGETED", // required
 *                 EnableMachineLearning: true || false,
 *               },
 *               AWSManagedRulesATPRuleSet: {
 *                 LoginPath: "STRING_VALUE", // required
 *                 RequestInspection: {
 *                   PayloadType: "JSON" || "FORM_ENCODED", // required
 *                   UsernameField: "<UsernameField>", // required
 *                   PasswordField: "<PasswordField>", // required
 *                 },
 *                 ResponseInspection: {
 *                   StatusCode: {
 *                     SuccessCodes: [ // required
 *                       Number("int"),
 *                     ],
 *                     FailureCodes: [ // required
 *                       Number("int"),
 *                     ],
 *                   },
 *                   Header: {
 *                     Name: "STRING_VALUE", // required
 *                     SuccessValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                     FailureValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                   BodyContains: {
 *                     SuccessStrings: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                     FailureStrings: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                   Json: {
 *                     Identifier: "STRING_VALUE", // required
 *                     SuccessValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                     FailureValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                 },
 *                 EnableRegexInPath: true || false,
 *               },
 *               AWSManagedRulesACFPRuleSet: {
 *                 CreationPath: "STRING_VALUE", // required
 *                 RegistrationPagePath: "STRING_VALUE", // required
 *                 RequestInspection: {
 *                   PayloadType: "JSON" || "FORM_ENCODED", // required
 *                   UsernameField: "<UsernameField>",
 *                   PasswordField: "<PasswordField>",
 *                   EmailField: {
 *                     Identifier: "STRING_VALUE", // required
 *                   },
 *                   PhoneNumberFields: [
 *                     {
 *                       Identifier: "STRING_VALUE", // required
 *                     },
 *                   ],
 *                   AddressFields: [
 *                     {
 *                       Identifier: "STRING_VALUE", // required
 *                     },
 *                   ],
 *                 },
 *                 ResponseInspection: {
 *                   StatusCode: {
 *                     SuccessCodes: [ // required
 *                       Number("int"),
 *                     ],
 *                     FailureCodes: [ // required
 *                       Number("int"),
 *                     ],
 *                   },
 *                   Header: {
 *                     Name: "STRING_VALUE", // required
 *                     SuccessValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                     FailureValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                   BodyContains: {
 *                     SuccessStrings: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                     FailureStrings: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                   Json: {
 *                     Identifier: "STRING_VALUE", // required
 *                     SuccessValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                     FailureValues: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                 },
 *                 EnableRegexInPath: true || false,
 *               },
 *               AWSManagedRulesAntiDDoSRuleSet: {
 *                 ClientSideActionConfig: {
 *                   Challenge: {
 *                     UsageOfAction: "ENABLED" || "DISABLED", // required
 *                     Sensitivity: "LOW" || "MEDIUM" || "HIGH",
 *                     ExemptUriRegularExpressions: [
 *                       {
 *                         RegexString: "STRING_VALUE",
 *                       },
 *                     ],
 *                   },
 *                 },
 *                 SensitivityToBlock: "LOW" || "MEDIUM" || "HIGH",
 *               },
 *             },
 *           ],
 *           RuleActionOverrides: [
 *             {
 *               Name: "STRING_VALUE", // required
 *               ActionToUse: {
 *                 Block: "<BlockAction>",
 *                 Allow: "<AllowAction>",
 *                 Count: {
 *                   CustomRequestHandling: "<CustomRequestHandling>",
 *                 },
 *                 Captcha: {
 *                   CustomRequestHandling: "<CustomRequestHandling>",
 *                 },
 *                 Challenge: {
 *                   CustomRequestHandling: "<CustomRequestHandling>",
 *                 },
 *               },
 *             },
 *           ],
 *         },
 *         LabelMatchStatement: {
 *           Scope: "LABEL" || "NAMESPACE", // required
 *           Key: "STRING_VALUE", // required
 *         },
 *         RegexMatchStatement: {
 *           RegexString: "STRING_VALUE", // required
 *           FieldToMatch: "<FieldToMatch>", // required
 *           TextTransformations: "<TextTransformations>", // required
 *         },
 *         AsnMatchStatement: {
 *           AsnList: [ // required
 *             Number("long"),
 *           ],
 *           ForwardedIPConfig: "<ForwardedIPConfig>",
 *         },
 *       },
 *       Action: "<RuleAction>",
 *       OverrideAction: { // OverrideAction
 *         Count: "<CountAction>",
 *         None: {},
 *       },
 *       RuleLabels: [ // Labels
 *         { // Label
 *           Name: "STRING_VALUE", // required
 *         },
 *       ],
 *       VisibilityConfig: { // VisibilityConfig
 *         SampledRequestsEnabled: true || false, // required
 *         CloudWatchMetricsEnabled: true || false, // required
 *         MetricName: "STRING_VALUE", // required
 *       },
 *       CaptchaConfig: { // CaptchaConfig
 *         ImmunityTimeProperty: { // ImmunityTimeProperty
 *           ImmunityTime: Number("long"), // required
 *         },
 *       },
 *       ChallengeConfig: { // ChallengeConfig
 *         ImmunityTimeProperty: {
 *           ImmunityTime: Number("long"), // required
 *         },
 *       },
 *     },
 *   ],
 *   VisibilityConfig: {
 *     SampledRequestsEnabled: true || false, // required
 *     CloudWatchMetricsEnabled: true || false, // required
 *     MetricName: "STRING_VALUE", // required
 *   },
 *   DataProtectionConfig: { // DataProtectionConfig
 *     DataProtections: [ // DataProtections // required
 *       { // DataProtection
 *         Field: { // FieldToProtect
 *           FieldType: "SINGLE_HEADER" || "SINGLE_COOKIE" || "SINGLE_QUERY_ARGUMENT" || "QUERY_STRING" || "BODY", // required
 *           FieldKeys: [ // FieldToProtectKeys
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Action: "SUBSTITUTION" || "HASH", // required
 *         ExcludeRuleMatchDetails: true || false,
 *         ExcludeRateBasedDetails: true || false,
 *       },
 *     ],
 *   },
 *   LockToken: "STRING_VALUE", // required
 *   CustomResponseBodies: { // CustomResponseBodies
 *     "<keys>": { // CustomResponseBody
 *       ContentType: "TEXT_PLAIN" || "TEXT_HTML" || "APPLICATION_JSON", // required
 *       Content: "STRING_VALUE", // required
 *     },
 *   },
 *   CaptchaConfig: {
 *     ImmunityTimeProperty: {
 *       ImmunityTime: Number("long"), // required
 *     },
 *   },
 *   ChallengeConfig: {
 *     ImmunityTimeProperty: {
 *       ImmunityTime: Number("long"), // required
 *     },
 *   },
 *   TokenDomains: [ // TokenDomains
 *     "STRING_VALUE",
 *   ],
 *   AssociationConfig: { // AssociationConfig
 *     RequestBody: { // RequestBody
 *       "<keys>": { // RequestBodyAssociatedResourceTypeConfig
 *         DefaultSizeInspectionLimit: "KB_16" || "KB_32" || "KB_48" || "KB_64", // required
 *       },
 *     },
 *   },
 *   OnSourceDDoSProtectionConfig: { // OnSourceDDoSProtectionConfig
 *     ALBLowReputationMode: "ACTIVE_UNDER_DDOS" || "ALWAYS_ON", // required
 *   },
 * };
 * const command = new UpdateWebACLCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWebACLResponse
 * //   NextLockToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateWebACLCommandInput - {@link UpdateWebACLCommandInput}
 * @returns {@link UpdateWebACLCommandOutput}
 * @see {@link UpdateWebACLCommandInput} for command's `input` shape.
 * @see {@link UpdateWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFConfigurationWarningException} (client fault)
 *  <p>The operation failed because you are inspecting the web request body, headers, or
 *          cookies without specifying how to handle oversize components. Rules that inspect the body
 *          must either provide an <code>OversizeHandling</code> configuration or they must be preceded
 *          by a <code>SizeConstraintStatement</code> that blocks the body content from being too
 *          large. Rules that inspect the headers or cookies must provide an
 *             <code>OversizeHandling</code> configuration. </p>
 *          <p>Provide the handling configuration and retry your operation.</p>
 *          <p>Alternately, you can suppress this warning by adding the following tag to the resource
 *          that you provide to this operation: <code>Tag</code>
 *             (key:<code>WAF:OversizeFieldsHandlingConstraintOptOut</code>,
 *          value:<code>true</code>).</p>
 *
 * @throws {@link WAFDuplicateItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because the resource that you tried to save is
 *          a duplicate of an existing one.</p>
 *
 * @throws {@link WAFExpiredManagedRuleGroupVersionException} (client fault)
 *  <p>The operation failed because the specified version for the managed rule group has
 *          expired. You can retrieve the available versions for the managed rule group by calling
 *             <a>ListAvailableManagedRuleGroupVersions</a>.</p>
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFInvalidResourceException} (client fault)
 *  <p>WAF couldn’t perform the operation because the resource that you requested isn’t
 *          valid. Check the resource, and try again.</p>
 *
 * @throws {@link WAFLimitsExceededException} (client fault)
 *  <p>WAF couldn’t perform the operation because you exceeded your resource limit. For
 *          example, the maximum number of <code>WebACL</code> objects that you can create for an Amazon Web Services
 *          account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
 *             <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFOptimisticLockException} (client fault)
 *  <p>WAF couldn’t save your changes because you tried to update or delete a resource
 *          that has changed since you last retrieved it. Get the resource again, make any changes you
 *          need to make to the new copy, and retry your operation. </p>
 *
 * @throws {@link WAFSubscriptionNotFoundException} (client fault)
 *  <p>You tried to use a managed rule group that's available by subscription, but you aren't
 *          subscribed to it yet. </p>
 *
 * @throws {@link WAFUnavailableEntityException} (client fault)
 *  <p>WAF couldn’t retrieve a resource that you specified for this operation.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. Verify the resource specifications in your request
 *        parameters and then retry the operation.</p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class UpdateWebACLCommand extends $Command
  .classBuilder<
    UpdateWebACLCommandInput,
    UpdateWebACLCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_20190729", "UpdateWebACL", {})
  .n("WAFV2Client", "UpdateWebACLCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWebACLCommand)
  .de(de_UpdateWebACLCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWebACLRequest;
      output: UpdateWebACLResponse;
    };
    sdk: {
      input: UpdateWebACLCommandInput;
      output: UpdateWebACLCommandOutput;
    };
  };
}
