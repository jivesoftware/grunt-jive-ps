# grunt-jiveps

A Grunt plugin that contains tasks used by Jive Professional Services.

# Tasks

## createExtension

Creates a jive-sdk extension.zip

### Options

#### outputDirectory

Type: `String`  
Default: `null`

Directory where the extension.zip will be placed.

## mavenDeploy

A multi-task that deploys an artifact to a Maven repository

### Options

#### groupId

Type: `String`  
Default: `null`

Project Group ID

#### url

Type: `String`  
Default: `null`

Maven repository URL

#### version

Type: `String`  
Default: `null`

Project version

#### repositoryId

Type: `String`  
Default: `null`

Maven Repository ID

#### artifactId

Type: `String`  
Default: `null`

Project artifact ID

### Example

```javascript
grunt.initConfig({
    mavenDeploy: {
        options: {
            groupId: grunt.option('groupId'),
            url: grunt.option('repositoryUrl'),
            version: grunt.option('projectVersion'),
            repositoryId: grunt.option('repositoryId'),
            artifactId: '<%= pkg.name %>'
        },
        deployExtension: {
            file: '<%= target_dir %>/<%= pkg.name %>-<%= version %>-extension.zip',
            classifier: 'extension'
        },
        deployService: {
            file: '<%= target_dir %>/<%= pkg.name %>-<%= version %>-service.zip',
            classifier: 'service'
        }
    }
});
```

## writeArtifactList

Creates an artifact-list.properties to be consumed by the Jive PS Jenkins release plugin

### Options

#### groupId

Type: `String`  
Default: `null`

Project Group ID

#### repositoryUrl

Type: `String`  
Default: `null`

Maven Repository URL

#### artifactId

Type: `String`  
Default: `null`

Project Artifact ID

#### version

Type: `String`  
Default: `null`

Project Version

#### Files

Type: `Array`  
Default: `null`

Array of file names to list

#### filename

Type: `String`  
Default: `null`

Output file name/path