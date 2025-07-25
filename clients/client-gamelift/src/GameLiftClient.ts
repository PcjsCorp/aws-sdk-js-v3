// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultGameLiftHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AcceptMatchCommandInput, AcceptMatchCommandOutput } from "./commands/AcceptMatchCommand";
import { ClaimGameServerCommandInput, ClaimGameServerCommandOutput } from "./commands/ClaimGameServerCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateBuildCommandInput, CreateBuildCommandOutput } from "./commands/CreateBuildCommand";
import {
  CreateContainerFleetCommandInput,
  CreateContainerFleetCommandOutput,
} from "./commands/CreateContainerFleetCommand";
import {
  CreateContainerGroupDefinitionCommandInput,
  CreateContainerGroupDefinitionCommandOutput,
} from "./commands/CreateContainerGroupDefinitionCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import {
  CreateFleetLocationsCommandInput,
  CreateFleetLocationsCommandOutput,
} from "./commands/CreateFleetLocationsCommand";
import {
  CreateGameServerGroupCommandInput,
  CreateGameServerGroupCommandOutput,
} from "./commands/CreateGameServerGroupCommand";
import { CreateGameSessionCommandInput, CreateGameSessionCommandOutput } from "./commands/CreateGameSessionCommand";
import {
  CreateGameSessionQueueCommandInput,
  CreateGameSessionQueueCommandOutput,
} from "./commands/CreateGameSessionQueueCommand";
import { CreateLocationCommandInput, CreateLocationCommandOutput } from "./commands/CreateLocationCommand";
import {
  CreateMatchmakingConfigurationCommandInput,
  CreateMatchmakingConfigurationCommandOutput,
} from "./commands/CreateMatchmakingConfigurationCommand";
import {
  CreateMatchmakingRuleSetCommandInput,
  CreateMatchmakingRuleSetCommandOutput,
} from "./commands/CreateMatchmakingRuleSetCommand";
import {
  CreatePlayerSessionCommandInput,
  CreatePlayerSessionCommandOutput,
} from "./commands/CreatePlayerSessionCommand";
import {
  CreatePlayerSessionsCommandInput,
  CreatePlayerSessionsCommandOutput,
} from "./commands/CreatePlayerSessionsCommand";
import { CreateScriptCommandInput, CreateScriptCommandOutput } from "./commands/CreateScriptCommand";
import {
  CreateVpcPeeringAuthorizationCommandInput,
  CreateVpcPeeringAuthorizationCommandOutput,
} from "./commands/CreateVpcPeeringAuthorizationCommand";
import {
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
} from "./commands/CreateVpcPeeringConnectionCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import { DeleteBuildCommandInput, DeleteBuildCommandOutput } from "./commands/DeleteBuildCommand";
import {
  DeleteContainerFleetCommandInput,
  DeleteContainerFleetCommandOutput,
} from "./commands/DeleteContainerFleetCommand";
import {
  DeleteContainerGroupDefinitionCommandInput,
  DeleteContainerGroupDefinitionCommandOutput,
} from "./commands/DeleteContainerGroupDefinitionCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteFleetLocationsCommandInput,
  DeleteFleetLocationsCommandOutput,
} from "./commands/DeleteFleetLocationsCommand";
import {
  DeleteGameServerGroupCommandInput,
  DeleteGameServerGroupCommandOutput,
} from "./commands/DeleteGameServerGroupCommand";
import {
  DeleteGameSessionQueueCommandInput,
  DeleteGameSessionQueueCommandOutput,
} from "./commands/DeleteGameSessionQueueCommand";
import { DeleteLocationCommandInput, DeleteLocationCommandOutput } from "./commands/DeleteLocationCommand";
import {
  DeleteMatchmakingConfigurationCommandInput,
  DeleteMatchmakingConfigurationCommandOutput,
} from "./commands/DeleteMatchmakingConfigurationCommand";
import {
  DeleteMatchmakingRuleSetCommandInput,
  DeleteMatchmakingRuleSetCommandOutput,
} from "./commands/DeleteMatchmakingRuleSetCommand";
import {
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput,
} from "./commands/DeleteScalingPolicyCommand";
import { DeleteScriptCommandInput, DeleteScriptCommandOutput } from "./commands/DeleteScriptCommand";
import {
  DeleteVpcPeeringAuthorizationCommandInput,
  DeleteVpcPeeringAuthorizationCommandOutput,
} from "./commands/DeleteVpcPeeringAuthorizationCommand";
import {
  DeleteVpcPeeringConnectionCommandInput,
  DeleteVpcPeeringConnectionCommandOutput,
} from "./commands/DeleteVpcPeeringConnectionCommand";
import { DeregisterComputeCommandInput, DeregisterComputeCommandOutput } from "./commands/DeregisterComputeCommand";
import {
  DeregisterGameServerCommandInput,
  DeregisterGameServerCommandOutput,
} from "./commands/DeregisterGameServerCommand";
import { DescribeAliasCommandInput, DescribeAliasCommandOutput } from "./commands/DescribeAliasCommand";
import { DescribeBuildCommandInput, DescribeBuildCommandOutput } from "./commands/DescribeBuildCommand";
import { DescribeComputeCommandInput, DescribeComputeCommandOutput } from "./commands/DescribeComputeCommand";
import {
  DescribeContainerFleetCommandInput,
  DescribeContainerFleetCommandOutput,
} from "./commands/DescribeContainerFleetCommand";
import {
  DescribeContainerGroupDefinitionCommandInput,
  DescribeContainerGroupDefinitionCommandOutput,
} from "./commands/DescribeContainerGroupDefinitionCommand";
import {
  DescribeEC2InstanceLimitsCommandInput,
  DescribeEC2InstanceLimitsCommandOutput,
} from "./commands/DescribeEC2InstanceLimitsCommand";
import {
  DescribeFleetAttributesCommandInput,
  DescribeFleetAttributesCommandOutput,
} from "./commands/DescribeFleetAttributesCommand";
import {
  DescribeFleetCapacityCommandInput,
  DescribeFleetCapacityCommandOutput,
} from "./commands/DescribeFleetCapacityCommand";
import {
  DescribeFleetDeploymentCommandInput,
  DescribeFleetDeploymentCommandOutput,
} from "./commands/DescribeFleetDeploymentCommand";
import {
  DescribeFleetEventsCommandInput,
  DescribeFleetEventsCommandOutput,
} from "./commands/DescribeFleetEventsCommand";
import {
  DescribeFleetLocationAttributesCommandInput,
  DescribeFleetLocationAttributesCommandOutput,
} from "./commands/DescribeFleetLocationAttributesCommand";
import {
  DescribeFleetLocationCapacityCommandInput,
  DescribeFleetLocationCapacityCommandOutput,
} from "./commands/DescribeFleetLocationCapacityCommand";
import {
  DescribeFleetLocationUtilizationCommandInput,
  DescribeFleetLocationUtilizationCommandOutput,
} from "./commands/DescribeFleetLocationUtilizationCommand";
import {
  DescribeFleetPortSettingsCommandInput,
  DescribeFleetPortSettingsCommandOutput,
} from "./commands/DescribeFleetPortSettingsCommand";
import {
  DescribeFleetUtilizationCommandInput,
  DescribeFleetUtilizationCommandOutput,
} from "./commands/DescribeFleetUtilizationCommand";
import { DescribeGameServerCommandInput, DescribeGameServerCommandOutput } from "./commands/DescribeGameServerCommand";
import {
  DescribeGameServerGroupCommandInput,
  DescribeGameServerGroupCommandOutput,
} from "./commands/DescribeGameServerGroupCommand";
import {
  DescribeGameServerInstancesCommandInput,
  DescribeGameServerInstancesCommandOutput,
} from "./commands/DescribeGameServerInstancesCommand";
import {
  DescribeGameSessionDetailsCommandInput,
  DescribeGameSessionDetailsCommandOutput,
} from "./commands/DescribeGameSessionDetailsCommand";
import {
  DescribeGameSessionPlacementCommandInput,
  DescribeGameSessionPlacementCommandOutput,
} from "./commands/DescribeGameSessionPlacementCommand";
import {
  DescribeGameSessionQueuesCommandInput,
  DescribeGameSessionQueuesCommandOutput,
} from "./commands/DescribeGameSessionQueuesCommand";
import {
  DescribeGameSessionsCommandInput,
  DescribeGameSessionsCommandOutput,
} from "./commands/DescribeGameSessionsCommand";
import { DescribeInstancesCommandInput, DescribeInstancesCommandOutput } from "./commands/DescribeInstancesCommand";
import {
  DescribeMatchmakingCommandInput,
  DescribeMatchmakingCommandOutput,
} from "./commands/DescribeMatchmakingCommand";
import {
  DescribeMatchmakingConfigurationsCommandInput,
  DescribeMatchmakingConfigurationsCommandOutput,
} from "./commands/DescribeMatchmakingConfigurationsCommand";
import {
  DescribeMatchmakingRuleSetsCommandInput,
  DescribeMatchmakingRuleSetsCommandOutput,
} from "./commands/DescribeMatchmakingRuleSetsCommand";
import {
  DescribePlayerSessionsCommandInput,
  DescribePlayerSessionsCommandOutput,
} from "./commands/DescribePlayerSessionsCommand";
import {
  DescribeRuntimeConfigurationCommandInput,
  DescribeRuntimeConfigurationCommandOutput,
} from "./commands/DescribeRuntimeConfigurationCommand";
import {
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "./commands/DescribeScalingPoliciesCommand";
import { DescribeScriptCommandInput, DescribeScriptCommandOutput } from "./commands/DescribeScriptCommand";
import {
  DescribeVpcPeeringAuthorizationsCommandInput,
  DescribeVpcPeeringAuthorizationsCommandOutput,
} from "./commands/DescribeVpcPeeringAuthorizationsCommand";
import {
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
} from "./commands/DescribeVpcPeeringConnectionsCommand";
import { GetComputeAccessCommandInput, GetComputeAccessCommandOutput } from "./commands/GetComputeAccessCommand";
import {
  GetComputeAuthTokenCommandInput,
  GetComputeAuthTokenCommandOutput,
} from "./commands/GetComputeAuthTokenCommand";
import {
  GetGameSessionLogUrlCommandInput,
  GetGameSessionLogUrlCommandOutput,
} from "./commands/GetGameSessionLogUrlCommand";
import { GetInstanceAccessCommandInput, GetInstanceAccessCommandOutput } from "./commands/GetInstanceAccessCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import { ListBuildsCommandInput, ListBuildsCommandOutput } from "./commands/ListBuildsCommand";
import { ListComputeCommandInput, ListComputeCommandOutput } from "./commands/ListComputeCommand";
import {
  ListContainerFleetsCommandInput,
  ListContainerFleetsCommandOutput,
} from "./commands/ListContainerFleetsCommand";
import {
  ListContainerGroupDefinitionsCommandInput,
  ListContainerGroupDefinitionsCommandOutput,
} from "./commands/ListContainerGroupDefinitionsCommand";
import {
  ListContainerGroupDefinitionVersionsCommandInput,
  ListContainerGroupDefinitionVersionsCommandOutput,
} from "./commands/ListContainerGroupDefinitionVersionsCommand";
import {
  ListFleetDeploymentsCommandInput,
  ListFleetDeploymentsCommandOutput,
} from "./commands/ListFleetDeploymentsCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import {
  ListGameServerGroupsCommandInput,
  ListGameServerGroupsCommandOutput,
} from "./commands/ListGameServerGroupsCommand";
import { ListGameServersCommandInput, ListGameServersCommandOutput } from "./commands/ListGameServersCommand";
import { ListLocationsCommandInput, ListLocationsCommandOutput } from "./commands/ListLocationsCommand";
import { ListScriptsCommandInput, ListScriptsCommandOutput } from "./commands/ListScriptsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput } from "./commands/PutScalingPolicyCommand";
import { RegisterComputeCommandInput, RegisterComputeCommandOutput } from "./commands/RegisterComputeCommand";
import { RegisterGameServerCommandInput, RegisterGameServerCommandOutput } from "./commands/RegisterGameServerCommand";
import {
  RequestUploadCredentialsCommandInput,
  RequestUploadCredentialsCommandOutput,
} from "./commands/RequestUploadCredentialsCommand";
import { ResolveAliasCommandInput, ResolveAliasCommandOutput } from "./commands/ResolveAliasCommand";
import {
  ResumeGameServerGroupCommandInput,
  ResumeGameServerGroupCommandOutput,
} from "./commands/ResumeGameServerGroupCommand";
import { SearchGameSessionsCommandInput, SearchGameSessionsCommandOutput } from "./commands/SearchGameSessionsCommand";
import { StartFleetActionsCommandInput, StartFleetActionsCommandOutput } from "./commands/StartFleetActionsCommand";
import {
  StartGameSessionPlacementCommandInput,
  StartGameSessionPlacementCommandOutput,
} from "./commands/StartGameSessionPlacementCommand";
import { StartMatchBackfillCommandInput, StartMatchBackfillCommandOutput } from "./commands/StartMatchBackfillCommand";
import { StartMatchmakingCommandInput, StartMatchmakingCommandOutput } from "./commands/StartMatchmakingCommand";
import { StopFleetActionsCommandInput, StopFleetActionsCommandOutput } from "./commands/StopFleetActionsCommand";
import {
  StopGameSessionPlacementCommandInput,
  StopGameSessionPlacementCommandOutput,
} from "./commands/StopGameSessionPlacementCommand";
import { StopMatchmakingCommandInput, StopMatchmakingCommandOutput } from "./commands/StopMatchmakingCommand";
import {
  SuspendGameServerGroupCommandInput,
  SuspendGameServerGroupCommandOutput,
} from "./commands/SuspendGameServerGroupCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateGameSessionCommandInput,
  TerminateGameSessionCommandOutput,
} from "./commands/TerminateGameSessionCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand";
import { UpdateBuildCommandInput, UpdateBuildCommandOutput } from "./commands/UpdateBuildCommand";
import {
  UpdateContainerFleetCommandInput,
  UpdateContainerFleetCommandOutput,
} from "./commands/UpdateContainerFleetCommand";
import {
  UpdateContainerGroupDefinitionCommandInput,
  UpdateContainerGroupDefinitionCommandOutput,
} from "./commands/UpdateContainerGroupDefinitionCommand";
import {
  UpdateFleetAttributesCommandInput,
  UpdateFleetAttributesCommandOutput,
} from "./commands/UpdateFleetAttributesCommand";
import {
  UpdateFleetCapacityCommandInput,
  UpdateFleetCapacityCommandOutput,
} from "./commands/UpdateFleetCapacityCommand";
import {
  UpdateFleetPortSettingsCommandInput,
  UpdateFleetPortSettingsCommandOutput,
} from "./commands/UpdateFleetPortSettingsCommand";
import { UpdateGameServerCommandInput, UpdateGameServerCommandOutput } from "./commands/UpdateGameServerCommand";
import {
  UpdateGameServerGroupCommandInput,
  UpdateGameServerGroupCommandOutput,
} from "./commands/UpdateGameServerGroupCommand";
import { UpdateGameSessionCommandInput, UpdateGameSessionCommandOutput } from "./commands/UpdateGameSessionCommand";
import {
  UpdateGameSessionQueueCommandInput,
  UpdateGameSessionQueueCommandOutput,
} from "./commands/UpdateGameSessionQueueCommand";
import {
  UpdateMatchmakingConfigurationCommandInput,
  UpdateMatchmakingConfigurationCommandOutput,
} from "./commands/UpdateMatchmakingConfigurationCommand";
import {
  UpdateRuntimeConfigurationCommandInput,
  UpdateRuntimeConfigurationCommandOutput,
} from "./commands/UpdateRuntimeConfigurationCommand";
import { UpdateScriptCommandInput, UpdateScriptCommandOutput } from "./commands/UpdateScriptCommand";
import {
  ValidateMatchmakingRuleSetCommandInput,
  ValidateMatchmakingRuleSetCommandOutput,
} from "./commands/ValidateMatchmakingRuleSetCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptMatchCommandInput
  | ClaimGameServerCommandInput
  | CreateAliasCommandInput
  | CreateBuildCommandInput
  | CreateContainerFleetCommandInput
  | CreateContainerGroupDefinitionCommandInput
  | CreateFleetCommandInput
  | CreateFleetLocationsCommandInput
  | CreateGameServerGroupCommandInput
  | CreateGameSessionCommandInput
  | CreateGameSessionQueueCommandInput
  | CreateLocationCommandInput
  | CreateMatchmakingConfigurationCommandInput
  | CreateMatchmakingRuleSetCommandInput
  | CreatePlayerSessionCommandInput
  | CreatePlayerSessionsCommandInput
  | CreateScriptCommandInput
  | CreateVpcPeeringAuthorizationCommandInput
  | CreateVpcPeeringConnectionCommandInput
  | DeleteAliasCommandInput
  | DeleteBuildCommandInput
  | DeleteContainerFleetCommandInput
  | DeleteContainerGroupDefinitionCommandInput
  | DeleteFleetCommandInput
  | DeleteFleetLocationsCommandInput
  | DeleteGameServerGroupCommandInput
  | DeleteGameSessionQueueCommandInput
  | DeleteLocationCommandInput
  | DeleteMatchmakingConfigurationCommandInput
  | DeleteMatchmakingRuleSetCommandInput
  | DeleteScalingPolicyCommandInput
  | DeleteScriptCommandInput
  | DeleteVpcPeeringAuthorizationCommandInput
  | DeleteVpcPeeringConnectionCommandInput
  | DeregisterComputeCommandInput
  | DeregisterGameServerCommandInput
  | DescribeAliasCommandInput
  | DescribeBuildCommandInput
  | DescribeComputeCommandInput
  | DescribeContainerFleetCommandInput
  | DescribeContainerGroupDefinitionCommandInput
  | DescribeEC2InstanceLimitsCommandInput
  | DescribeFleetAttributesCommandInput
  | DescribeFleetCapacityCommandInput
  | DescribeFleetDeploymentCommandInput
  | DescribeFleetEventsCommandInput
  | DescribeFleetLocationAttributesCommandInput
  | DescribeFleetLocationCapacityCommandInput
  | DescribeFleetLocationUtilizationCommandInput
  | DescribeFleetPortSettingsCommandInput
  | DescribeFleetUtilizationCommandInput
  | DescribeGameServerCommandInput
  | DescribeGameServerGroupCommandInput
  | DescribeGameServerInstancesCommandInput
  | DescribeGameSessionDetailsCommandInput
  | DescribeGameSessionPlacementCommandInput
  | DescribeGameSessionQueuesCommandInput
  | DescribeGameSessionsCommandInput
  | DescribeInstancesCommandInput
  | DescribeMatchmakingCommandInput
  | DescribeMatchmakingConfigurationsCommandInput
  | DescribeMatchmakingRuleSetsCommandInput
  | DescribePlayerSessionsCommandInput
  | DescribeRuntimeConfigurationCommandInput
  | DescribeScalingPoliciesCommandInput
  | DescribeScriptCommandInput
  | DescribeVpcPeeringAuthorizationsCommandInput
  | DescribeVpcPeeringConnectionsCommandInput
  | GetComputeAccessCommandInput
  | GetComputeAuthTokenCommandInput
  | GetGameSessionLogUrlCommandInput
  | GetInstanceAccessCommandInput
  | ListAliasesCommandInput
  | ListBuildsCommandInput
  | ListComputeCommandInput
  | ListContainerFleetsCommandInput
  | ListContainerGroupDefinitionVersionsCommandInput
  | ListContainerGroupDefinitionsCommandInput
  | ListFleetDeploymentsCommandInput
  | ListFleetsCommandInput
  | ListGameServerGroupsCommandInput
  | ListGameServersCommandInput
  | ListLocationsCommandInput
  | ListScriptsCommandInput
  | ListTagsForResourceCommandInput
  | PutScalingPolicyCommandInput
  | RegisterComputeCommandInput
  | RegisterGameServerCommandInput
  | RequestUploadCredentialsCommandInput
  | ResolveAliasCommandInput
  | ResumeGameServerGroupCommandInput
  | SearchGameSessionsCommandInput
  | StartFleetActionsCommandInput
  | StartGameSessionPlacementCommandInput
  | StartMatchBackfillCommandInput
  | StartMatchmakingCommandInput
  | StopFleetActionsCommandInput
  | StopGameSessionPlacementCommandInput
  | StopMatchmakingCommandInput
  | SuspendGameServerGroupCommandInput
  | TagResourceCommandInput
  | TerminateGameSessionCommandInput
  | UntagResourceCommandInput
  | UpdateAliasCommandInput
  | UpdateBuildCommandInput
  | UpdateContainerFleetCommandInput
  | UpdateContainerGroupDefinitionCommandInput
  | UpdateFleetAttributesCommandInput
  | UpdateFleetCapacityCommandInput
  | UpdateFleetPortSettingsCommandInput
  | UpdateGameServerCommandInput
  | UpdateGameServerGroupCommandInput
  | UpdateGameSessionCommandInput
  | UpdateGameSessionQueueCommandInput
  | UpdateMatchmakingConfigurationCommandInput
  | UpdateRuntimeConfigurationCommandInput
  | UpdateScriptCommandInput
  | ValidateMatchmakingRuleSetCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptMatchCommandOutput
  | ClaimGameServerCommandOutput
  | CreateAliasCommandOutput
  | CreateBuildCommandOutput
  | CreateContainerFleetCommandOutput
  | CreateContainerGroupDefinitionCommandOutput
  | CreateFleetCommandOutput
  | CreateFleetLocationsCommandOutput
  | CreateGameServerGroupCommandOutput
  | CreateGameSessionCommandOutput
  | CreateGameSessionQueueCommandOutput
  | CreateLocationCommandOutput
  | CreateMatchmakingConfigurationCommandOutput
  | CreateMatchmakingRuleSetCommandOutput
  | CreatePlayerSessionCommandOutput
  | CreatePlayerSessionsCommandOutput
  | CreateScriptCommandOutput
  | CreateVpcPeeringAuthorizationCommandOutput
  | CreateVpcPeeringConnectionCommandOutput
  | DeleteAliasCommandOutput
  | DeleteBuildCommandOutput
  | DeleteContainerFleetCommandOutput
  | DeleteContainerGroupDefinitionCommandOutput
  | DeleteFleetCommandOutput
  | DeleteFleetLocationsCommandOutput
  | DeleteGameServerGroupCommandOutput
  | DeleteGameSessionQueueCommandOutput
  | DeleteLocationCommandOutput
  | DeleteMatchmakingConfigurationCommandOutput
  | DeleteMatchmakingRuleSetCommandOutput
  | DeleteScalingPolicyCommandOutput
  | DeleteScriptCommandOutput
  | DeleteVpcPeeringAuthorizationCommandOutput
  | DeleteVpcPeeringConnectionCommandOutput
  | DeregisterComputeCommandOutput
  | DeregisterGameServerCommandOutput
  | DescribeAliasCommandOutput
  | DescribeBuildCommandOutput
  | DescribeComputeCommandOutput
  | DescribeContainerFleetCommandOutput
  | DescribeContainerGroupDefinitionCommandOutput
  | DescribeEC2InstanceLimitsCommandOutput
  | DescribeFleetAttributesCommandOutput
  | DescribeFleetCapacityCommandOutput
  | DescribeFleetDeploymentCommandOutput
  | DescribeFleetEventsCommandOutput
  | DescribeFleetLocationAttributesCommandOutput
  | DescribeFleetLocationCapacityCommandOutput
  | DescribeFleetLocationUtilizationCommandOutput
  | DescribeFleetPortSettingsCommandOutput
  | DescribeFleetUtilizationCommandOutput
  | DescribeGameServerCommandOutput
  | DescribeGameServerGroupCommandOutput
  | DescribeGameServerInstancesCommandOutput
  | DescribeGameSessionDetailsCommandOutput
  | DescribeGameSessionPlacementCommandOutput
  | DescribeGameSessionQueuesCommandOutput
  | DescribeGameSessionsCommandOutput
  | DescribeInstancesCommandOutput
  | DescribeMatchmakingCommandOutput
  | DescribeMatchmakingConfigurationsCommandOutput
  | DescribeMatchmakingRuleSetsCommandOutput
  | DescribePlayerSessionsCommandOutput
  | DescribeRuntimeConfigurationCommandOutput
  | DescribeScalingPoliciesCommandOutput
  | DescribeScriptCommandOutput
  | DescribeVpcPeeringAuthorizationsCommandOutput
  | DescribeVpcPeeringConnectionsCommandOutput
  | GetComputeAccessCommandOutput
  | GetComputeAuthTokenCommandOutput
  | GetGameSessionLogUrlCommandOutput
  | GetInstanceAccessCommandOutput
  | ListAliasesCommandOutput
  | ListBuildsCommandOutput
  | ListComputeCommandOutput
  | ListContainerFleetsCommandOutput
  | ListContainerGroupDefinitionVersionsCommandOutput
  | ListContainerGroupDefinitionsCommandOutput
  | ListFleetDeploymentsCommandOutput
  | ListFleetsCommandOutput
  | ListGameServerGroupsCommandOutput
  | ListGameServersCommandOutput
  | ListLocationsCommandOutput
  | ListScriptsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutScalingPolicyCommandOutput
  | RegisterComputeCommandOutput
  | RegisterGameServerCommandOutput
  | RequestUploadCredentialsCommandOutput
  | ResolveAliasCommandOutput
  | ResumeGameServerGroupCommandOutput
  | SearchGameSessionsCommandOutput
  | StartFleetActionsCommandOutput
  | StartGameSessionPlacementCommandOutput
  | StartMatchBackfillCommandOutput
  | StartMatchmakingCommandOutput
  | StopFleetActionsCommandOutput
  | StopGameSessionPlacementCommandOutput
  | StopMatchmakingCommandOutput
  | SuspendGameServerGroupCommandOutput
  | TagResourceCommandOutput
  | TerminateGameSessionCommandOutput
  | UntagResourceCommandOutput
  | UpdateAliasCommandOutput
  | UpdateBuildCommandOutput
  | UpdateContainerFleetCommandOutput
  | UpdateContainerGroupDefinitionCommandOutput
  | UpdateFleetAttributesCommandOutput
  | UpdateFleetCapacityCommandOutput
  | UpdateFleetPortSettingsCommandOutput
  | UpdateGameServerCommandOutput
  | UpdateGameServerGroupCommandOutput
  | UpdateGameSessionCommandOutput
  | UpdateGameSessionQueueCommandOutput
  | UpdateMatchmakingConfigurationCommandOutput
  | UpdateRuntimeConfigurationCommandOutput
  | UpdateScriptCommandOutput
  | ValidateMatchmakingRuleSetCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type GameLiftClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of GameLiftClient class constructor that set the region, credentials and other options.
 */
export interface GameLiftClientConfig extends GameLiftClientConfigType {}

/**
 * @public
 */
export type GameLiftClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of GameLiftClient class. This is resolved and normalized from the {@link GameLiftClientConfig | constructor configuration interface}.
 */
export interface GameLiftClientResolvedConfig extends GameLiftClientResolvedConfigType {}

/**
 * <p>Amazon GameLift Servers provides solutions for hosting session-based multiplayer game servers in the
 *             cloud, including tools for deploying, operating, and scaling game servers. Built on
 *             Amazon Web Services global computing infrastructure, GameLift helps you deliver high-performance,
 *             high-reliability, low-cost game servers while dynamically scaling your resource usage to
 *             meet player demand. </p>
 *          <p>
 *             <b>About Amazon GameLift Servers solutions</b>
 *          </p>
 *          <p>Get more information on these Amazon GameLift Servers solutions in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/">Amazon GameLift Servers Developer Guide</a>.</p>
 *          <ul>
 *             <li>
 *                <p>Amazon GameLift Servers managed hosting -- Amazon GameLift Servers offers a fully managed service to set up
 *                     and maintain computing machines for hosting, manage game session and player
 *                     session life cycle, and handle security, storage, and performance tracking. You
 *                     can use automatic scaling tools to balance player demand and hosting costs,
 *                     configure your game session management to minimize player latency, and add
 *                     FlexMatch for matchmaking.</p>
 *             </li>
 *             <li>
 *                <p>Managed hosting with Amazon GameLift Servers Realtime -- With Amazon GameLift Servers Amazon GameLift Servers Realtime, you can quickly configure
 *                     and set up ready-to-go game servers for your game. Amazon GameLift Servers Realtime provides a game server
 *                     framework with core Amazon GameLift Servers infrastructure already built in. Then use the full
 *                     range of Amazon GameLift Servers managed hosting features, including FlexMatch, for your
 *                     game.</p>
 *             </li>
 *             <li>
 *                <p>Amazon GameLift Servers FleetIQ -- Use Amazon GameLift Servers FleetIQ as a standalone service while hosting your games using EC2
 *                     instances and Auto Scaling groups. Amazon GameLift Servers FleetIQ provides optimizations for game
 *                     hosting, including boosting the viability of low-cost Spot Instances gaming. For
 *                     a complete solution, pair the Amazon GameLift Servers FleetIQ and FlexMatch standalone services.</p>
 *             </li>
 *             <li>
 *                <p>Amazon GameLift Servers FlexMatch -- Add matchmaking to your game hosting solution. FlexMatch is a
 *                     customizable matchmaking service for multiplayer games. Use FlexMatch as
 *                     integrated with Amazon GameLift Servers managed hosting or incorporate FlexMatch as a standalone
 *                     service into your own hosting solution.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>About this API Reference</b>
 *          </p>
 *          <p>This reference guide describes the low-level service API for Amazon GameLift Servers. With each topic
 *             in this guide, you can find links to language-specific SDK guides and the Amazon Web Services CLI
 *             reference. Useful links:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">Amazon GameLift Servers API
 *                         operations listed by tasks</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html"> Amazon GameLift Servers tools
 *                         and resources</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class GameLiftClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GameLiftClientResolvedConfig
> {
  /**
   * The resolved configuration of GameLiftClient class. This is resolved and normalized from the {@link GameLiftClientConfig | constructor configuration interface}.
   */
  readonly config: GameLiftClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<GameLiftClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultGameLiftHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: GameLiftClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
